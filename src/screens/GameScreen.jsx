/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Dimensions,
    PanResponder,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter, { Bodies, Composite, Events } from 'matter-js';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';

import gameMan from '../assets/gameMan.png';
import hole from '../assets/hole.png';
import basket from '../assets/basket.png';
import playBG from '../assets/playBG.png';
import PauseSVG from '../assets/icons/PauseSVG';

import Physics from '../systems/Physics';
import Spawner from '../systems/Spawner';
import generateDots from '../helpers/generateDots';
import PinsRenderer from '../components/PinsRenderer';

import PauseModal from '../components/PauseModal';
import WinModal from '../components/WinModal';
import LoseModal from '../components/LoseModal';
import LevelModal from '../components/LevelModal';
import ManualModal from '../components/ManualModal';

import {
    setLevelModalVisible,
    markLevelCompleted,
    nextLevel,
} from '../store/slices/levelsSlice';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASKET_WIDTH = 100;
const BASKET_HEIGHT = 80;

export default function GameScreen({ navigation }) {
    const dispatch = useDispatch();
    const currentLevel = useSelector(state =>
        state.levels.levels.find(lvl => lvl.id === state.levels.currentLevelId)
    );
    const isLevelModalVisible = useSelector(state => state.levels.isLevelModalVisible);

    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [winModalVisible, setWinModalVisible] = useState(false);
    const [loseModalVisible, setLoseModalVisible] = useState(false);

    const [manualModalVisible, setManualModalVisible] = useState(false);

    useEffect(() => {
        if (currentLevel?.id === 1) {
            setManualModalVisible(true);
        }
    }, [currentLevel]);

    const basketInitialX = (SCREEN_WIDTH - BASKET_WIDTH) / 2;
    const basketXAnim = useRef(new Animated.Value(basketInitialX)).current;
    const gameEngineRef = useRef(null);

    const requiredSum = currentLevel.requirements
        ? Object.values(currentLevel.requirements).reduce((a, b) => a + b, 0)
        : currentLevel.goals;

    const engine = useRef(Matter.Engine.create({ enableSleeping: false })).current;
    const world = engine.world;

    const dots = generateDots();
    dots.forEach(dot => {
        const pin = Bodies.circle(dot.x, dot.y, 8, { isStatic: true, restitution: 0.5 });
        Composite.add(world, pin);
    });

    const floor = Bodies.rectangle(
        SCREEN_WIDTH / 2,
        SCREEN_HEIGHT + 50,
        SCREEN_WIDTH,
        20,
        { isStatic: true }
    );
    const leftWall = Bodies.rectangle(-50, SCREEN_HEIGHT / 2, 100, SCREEN_HEIGHT, { isStatic: true });
    const rightWall = Bodies.rectangle(SCREEN_WIDTH + 50, SCREEN_HEIGHT / 2, 100, SCREEN_HEIGHT, { isStatic: true });
    Composite.add(world, [floor, leftWall, rightWall]);

    const basketBody = Bodies.rectangle(
        basketInitialX + BASKET_WIDTH / 2,
        SCREEN_HEIGHT - 66 - BASKET_HEIGHT / 2,
        BASKET_WIDTH,
        BASKET_HEIGHT,
        { isStatic: true, label: 'basket' }
    );
    Composite.add(world, basketBody);

    useEffect(() => {
        const listenerId = basketXAnim.addListener(({ value }) => {
            Matter.Body.setPosition(basketBody, {
                x: value + BASKET_WIDTH / 2,
                y: basketBody.position.y,
            });
        });
        return () => {
            basketXAnim.removeListener(listenerId);
        };
    }, [basketXAnim]);

    const handleBallFall = useCallback(
        (ballColor) => {
            if (currentLevel.requirements && currentLevel.requirements[ballColor] !== undefined) {
                setProgress((prev) => {
                    const newProgress = prev - 1;
                    if (newProgress < 0) {
                        setLoseModalVisible(true);
                    }
                    return newProgress;
                });
            }
        },
        [currentLevel]
    );

    const initialEntities = {
        physics: { engine, world },
        gameState: { spawnTimer: 0, holeX: SCREEN_WIDTH / 2, holeY: -30, onBallFall: handleBallFall },
        pins: { dots, renderer: PinsRenderer },
    };

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                basketXAnim.stopAnimation();
            },
            onPanResponderMove: (_, gestureState) => {
                let newX = gestureState.moveX - BASKET_WIDTH / 2;
                newX = Math.max(16, Math.min(newX, SCREEN_WIDTH - BASKET_WIDTH - 16));
                basketXAnim.setValue(newX);
            },
            onPanResponderRelease: () => { },
        })
    ).current;

    useEffect(() => {
        Events.on(engine, 'collisionStart', (event) => {
            event.pairs.forEach((pair) => {
                const { bodyA, bodyB } = pair;
                if (
                    (bodyA.label === 'basket' && bodyB.label === 'ball') ||
                    (bodyB.label === 'basket' && bodyA.label === 'ball')
                ) {
                    const ballBody = bodyA.label === 'ball' ? bodyA : bodyB;
                    if (gameEngineRef.current) {
                        const entities = gameEngineRef.current.state.entities;
                        const ballKey = Object.keys(entities).find(
                            (key) => entities[key].body === ballBody
                        );
                        if (ballKey) {
                            const ballEntity = entities[ballKey];
                            if (currentLevel.requirements) {
                                if (currentLevel.requirements.hasOwnProperty('any')) {
                                    if (ballEntity.color !== 'black') {
                                        setProgress((prev) => {
                                            const newProgress = prev + 1;
                                            if (newProgress >= requiredSum) {
                                                setWinModalVisible(true);
                                            }
                                            return newProgress;
                                        });
                                    } else {
                                        setLoseModalVisible(true);
                                    }
                                } else if (currentLevel.requirements[ballEntity.color] !== undefined) {
                                    setProgress((prev) => {
                                        const newProgress = prev + 1;
                                        if (newProgress >= requiredSum) {
                                            setWinModalVisible(true);
                                        }
                                        return newProgress;
                                    });
                                } else {
                                    setLoseModalVisible(true);
                                }
                            }
                            ballEntity.isEaten = true;
                            Composite.remove(world, ballBody);
                            delete entities[ballKey];
                        }
                    }
                }
            });
        });
    }, [engine, world, currentLevel, requiredSum]);

    const systems = [Physics, Spawner];

    const handleClosePauseModal = () => setIsPaused(false);
    const handleSettingsPress = () => {
        navigation.navigate('Settings');
        setIsPaused(false);
    };
    const handleMenuPress = () => {
        navigation.navigate('Start');
        setIsPaused(false);
        setLoseModalVisible(false);
    };

    const handleStartLevel = () => {
        dispatch(setLevelModalVisible(false));
    };
    const handleCancelLevelModal = () => {
        dispatch(setLevelModalVisible(false));
    };
    const handleWinContinue = () => {
        dispatch(markLevelCompleted(currentLevel.id));
        dispatch(nextLevel());
        setProgress(0);
        setWinModalVisible(false);
    };
    const handleRetry = () => {
        setProgress(0);
        setLoseModalVisible(false);
    };

    return (
        <LinearGradient colors={['#A71ABA', '#7109AD']} style={styles.gradientContainer}>
            <Image source={playBG} style={styles.bgImage} resizeMode="cover" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.topBar}>
                    <Text style={styles.catchText}>CATCH THE BALLS</Text>
                    <View style={styles.progressOuter}>
                        <View
                            style={[
                                styles.progressFill,
                                {
                                    width:
                                        21 +
                                        ((125 - 21) * progress) / (requiredSum || currentLevel.goals),
                                },
                            ]}
                        />
                        <Text style={styles.progressText}>
                            {progress}/{requiredSum}
                        </Text>
                    </View>
                    {currentLevel && currentLevel.headerIcon && (
                        <View style={styles.ballContainer}>
                            <currentLevel.headerIcon />
                        </View>
                    )}
                    <Image source={gameMan} style={styles.gameMan} />
                    <TouchableOpacity style={styles.pauseButton} onPress={() => setIsPaused(true)}>
                        <PauseSVG />
                    </TouchableOpacity>
                </View>
                <View style={styles.holeContainer}>
                    <Image source={hole} style={styles.holeImage} />
                </View>
                <GameEngine
                    ref={gameEngineRef}
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    systems={systems}
                    entities={initialEntities}
                    running={!isPaused && !isLevelModalVisible && !winModalVisible && !loseModalVisible && !manualModalVisible}
                >
                    <PinsRenderer dots={dots} />
                </GameEngine>
                <Animated.View
                    style={[styles.basketContainer, { transform: [{ translateX: basketXAnim }] }]}
                    {...panResponder.panHandlers}
                >
                    <Image source={basket} style={styles.basketImage} />
                </Animated.View>
            </SafeAreaView>

            <PauseModal
                visible={isPaused}
                onClose={handleClosePauseModal}
                progress={progress}
                onSettingsPress={handleSettingsPress}
                onMenuPress={handleMenuPress}
            />
            <WinModal visible={winModalVisible} onClose={handleWinContinue} />
            <LoseModal visible={loseModalVisible} onRetry={handleRetry} onMenuPress={handleMenuPress} />
            <LevelModal
                visible={isLevelModalVisible}
                onStart={handleStartLevel}
                onClose={handleCancelLevelModal}
                levelData={currentLevel}
            />

            {manualModalVisible && (
                <ManualModal
                    visible={manualModalVisible}
                    onClose={() => {
                        setManualModalVisible(false);
                        dispatch(setLevelModalVisible(true));
                    }}
                />
            )}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: { flex: 1 },
    bgImage: { ...StyleSheet.absoluteFillObject, opacity: 0.1 },
    topBar: { height: 136, backgroundColor: '#55006B', position: 'relative' },
    catchText: {
        position: 'absolute',
        top: 14,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
    },
    progressOuter: {
        position: 'absolute',
        top: 56,
        alignSelf: 'center',
        width: 125,
        height: 35,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#9916B6',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressFill: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 38,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 42,
    },
    progressText: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        lineHeight: 35,
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 15,
        color: '#FFFFFF',
    },
    ballContainer: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 24,
        paddingTop: 46,
    },
    gameMan: { position: 'absolute', right: 16, bottom: 0, resizeMode: 'contain' },
    pauseButton: {
        position: 'absolute',
        top: 15,
        right: 12,
        width: 31,
        height: 31,
        backgroundColor: '#FFFFFF',
        borderRadius: 15.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    holeContainer: { alignItems: 'center', marginTop: 83 },
    holeImage: { width: 60, height: 60, resizeMode: 'contain' },
    basketContainer: { position: 'absolute', bottom: 66, width: 100, height: 80, alignItems: 'center' },
    basketImage: { width: 100, height: 80, resizeMode: 'contain' },
});
