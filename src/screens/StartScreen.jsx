import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HistorySVG from '../assets/icons/HistorySVG';
import SettingsSVG from '../assets/icons/SettingsSVG';
import PlaySVG from '../assets/icons/PlaySVG';

export default function StartScreen({ navigation }) {
    return (
        <LinearGradient
            colors={['#A71ABA', '#7109AD']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent'  }}>
                <Image
                    source={require('../assets/blur/blurImage1.png')}
                    style={styles.blurImage1}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage2.png')}
                    style={styles.blurImage2}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage3.png')}
                    style={styles.blurImage3}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage4.png')}
                    style={styles.blurImage4}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage5.png')}
                    style={styles.blurImage5}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage6.png')}
                    style={styles.blurImage6}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage7.png')}
                    style={styles.blurImage7}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/blur/blurImage8.png')}
                    style={styles.blurImage8}
                    resizeMode="contain"
                />
                <View style={styles.topButtonsContainer}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => navigation.navigate('History')}
                    >
                        <HistorySVG />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => navigation.navigate('Settings')}
                    >
                        <SettingsSVG />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerContent}>
                    <Image
                        source={require('../assets/BlinkoCatchMain.png')}
                        style={styles.blinkoImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.startText}>Start the game</Text>
                    <TouchableOpacity
                        style={styles.playButton}
                        onPress={() => navigation.navigate('Game')}
                    >
                        <PlaySVG />
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../assets/bigMan.png')}
                    style={styles.bigMan}
                    resizeMode="contain"
                    pointerEvents="none"
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    topButtonsContainer: {
        position: 'absolute',
        top: 18,
        right: 16,
        flexDirection: 'row',
        marginTop: 38,
    },
    iconButton: {
        width: 34,
        height: 34,
        borderRadius: 21,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startText: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Poppins-Bold',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    playButton: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    blurImage1: {
        position: 'absolute',
        left: 0,
        top: 12,
    },
    blurImage2: {
        position: 'absolute',
        top: 133,
        right: 113,
    },
    blurImage3: {
        position: 'absolute',
        left: 0,
        top: 212,
    },
    blurImage4: {
        position: 'absolute',
        right: 0,
        top: 358,
    },
    blurImage5: {
        position: 'absolute',
        right: 18,
        top: 154,
    },
    blurImage6: {
        position: 'absolute',
        left: 0,
        top: 408,
    },
    blurImage7: {
        position: 'absolute',
        right: 0,
        top: 240,
    },
    blurImage8: {
        position: 'absolute',
        bottom: 54,
        left: 177,
    },
});
