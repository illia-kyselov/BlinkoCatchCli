import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    Dimensions,
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

import Level1HeaderIcon from '../assets/levels/headers/Level1SVG.jsx';
import Level2HeaderIcon from '../assets/levels/headers/Level2SVG.jsx';
import Level3HeaderIcon from '../assets/levels/headers/Level3SVG.jsx';
import Level4HeaderIcon from '../assets/levels/headers/Level4SVG.jsx';
import Level5HeaderIcon from '../assets/levels/headers/Level5SVG.jsx';
import Level6HeaderIcon from '../assets/levels/headers/Level6SVG.jsx';
import Level7HeaderIcon from '../assets/levels/headers/Level7SVG.jsx';
import Level8HeaderIcon from '../assets/levels/headers/Level8SVG.jsx';
import Level9HeaderIcon from '../assets/levels/headers/Level9SVG.jsx';
import Level10HeaderIcon from '../assets/levels/headers/Level10SVG.jsx';
import Level11HeaderIcon from '../assets/levels/headers/Level11SVG.jsx';
import Level12HeaderIcon from '../assets/levels/headers/Level12SVG.jsx';

import Physics from '../systems/Physics';
import Spawner from '../systems/Spawner';

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

import createEntities from '../helpers/createEntities';
import handleCollision from '../helpers/handleCollision';
import { resetGame } from '../helpers/gameUtils';
import useBasketMovement from '../hooks/useBasketMovement';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASKET_WIDTH = 100;
const BASKET_HEIGHT = 80;

const headerIconMapping = {
    Level1: Level1HeaderIcon,
    Level2: Level2HeaderIcon,
    Level3: Level3HeaderIcon,
    Level4: Level4HeaderIcon,
    Level5: Level5HeaderIcon,
    Level6: Level6HeaderIcon,
    Level7: Level7HeaderIcon,
    Level8: Level8HeaderIcon,
    Level9: Level9HeaderIcon,
    Level10: Level10HeaderIcon,
    Level11: Level11HeaderIcon,
    Level12: Level12HeaderIcon,
};

export default function GameScreen({ navigation }) {
    const dispatch = useDispatch();
    const currentLevel = useSelector((state) =>
        state.levels.levels.find((lvl) => lvl.id === state.levels.currentLevelId)
    );
    const isLevelModalVisible = useSelector(
        (state) => state.levels.isLevelModalVisible
    );

    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [winModalVisible, setWinModalVisible] = useState(false);
    const [loseModalVisible, setLoseModalVisible] = useState(false);
    const [manualModalVisible, setManualModalVisible] = useState(false);

    const currentLevelRef = useRef(currentLevel);
    useEffect(() => {
        currentLevelRef.current = currentLevel;
        if (currentLevel?.id === 1) {
            setManualModalVisible(true);
        }
    }, [currentLevel]);

    const basketInitialX = (SCREEN_WIDTH - BASKET_WIDTH) / 2;

    const engine = useRef(Matter.Engine.create({ enableSleeping: false })).current;
    const world = engine.world;

    const basketBody = useRef(
        Bodies.rectangle(
            basketInitialX + BASKET_WIDTH / 2,
            SCREEN_HEIGHT - 66 - BASKET_HEIGHT / 2,
            BASKET_WIDTH,
            BASKET_HEIGHT,
            { isStatic: true, label: 'basket' }
        )
    ).current;
    useEffect(() => {
        Composite.add(world, basketBody);
    }, [world, basketBody]);

    const { basketXAnim, panResponder } = useBasketMovement(basketInitialX, basketBody);

    const handleBallFall = useCallback(
        (ballColor) => {
            const lvl = currentLevelRef.current;
            if (lvl && lvl.requirements && lvl.requirements[ballColor] !== undefined) {
                setProgress((prev) => {
                    const newProgress = prev - 1;
                    if (newProgress < 0) {
                        setLoseModalVisible(true);
                    }
                    return newProgress;
                });
            }
        },
        []
    );

    const [entities, setEntities] = useState(
        createEntities(engine, world, currentLevel, handleBallFall)
    );
    const gameEngineRef = useRef(null);

    useEffect(() => {
        if (gameEngineRef.current) {
            const newEntities = createEntities(engine, world, currentLevel, handleBallFall);
            setProgress(0);
            gameEngineRef.current.swap(newEntities);
            setEntities(newEntities);
        }
    }, [currentLevel, engine, world, handleBallFall]);

    useEffect(() => {
        Events.on(engine, 'collisionStart', (event) => {
            handleCollision({
                event,
                basketBody,
                currentLevelRef,
                gameEngineRef,
                world,
                isLevelModalVisible,
                setProgress,
                setLoseModalVisible,
                setWinModalVisible,
            });
        });
    }, [engine, world, isLevelModalVisible, basketBody]);

    const systems = [Physics, Spawner];

    const handleClosePauseModal = () => setIsPaused(false);
    const handleSettingsPress = () => {
        navigation.navigate('Settings');
        setIsPaused(false);
    };
    const handleMenuPress = () => {
        navigation.replace('Start');
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
        resetGame(basketXAnim, gameEngineRef, world, basketInitialX);
        setProgress(0);
        setWinModalVisible(false);
    };
    const handleRetry = () => {
        resetGame(basketXAnim, gameEngineRef, world, basketInitialX);
        setProgress(0);
        setLoseModalVisible(false);
    };

    const HeaderIcon =
        currentLevel && currentLevel.headerIcon
            ? headerIconMapping[currentLevel.headerIcon]
            : null;

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
                                    width: 21 + ((125 - 21) * progress) / (currentLevel.goals || 0),
                                },
                            ]}
                        />
                        <Text style={styles.progressText}>{progress}/{currentLevel.goals}</Text>
                    </View>
                    {HeaderIcon && (
                        <View style={styles.ballContainer}>
                            <HeaderIcon />
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
                    entities={entities}
                    running={
                        !isPaused &&
                        !isLevelModalVisible &&
                        !winModalVisible &&
                        !loseModalVisible &&
                        !manualModalVisible
                    }
                />
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
    bgImage: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.1,
    },
    topBar: {
        height: 136,
        backgroundColor: '#55006B',
        position: 'relative',
    },
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
    gameMan: {
        position: 'absolute',
        right: 16,
        bottom: 0,
        resizeMode: 'contain',
    },
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
    holeContainer: {
        alignItems: 'center',
        marginTop: 83,
    },
    holeImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    basketContainer: {
        position: 'absolute',
        bottom: 66,
        width: BASKET_WIDTH,
        height: BASKET_HEIGHT,
        alignItems: 'center',
    },
    basketImage: {
        width: BASKET_WIDTH,
        height: BASKET_HEIGHT,
        resizeMode: 'contain',
    },
});
