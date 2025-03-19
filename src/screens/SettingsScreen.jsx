import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';

import ArrowBackSVG from '../assets/icons/ArrowBackSVG';
import PrivacySVG from '../assets/icons/PrivacySVG';
import WebsiteSVG from '../assets/icons/WebsiteSVG';
import MusicSVG from '../assets/icons/MusicSVG';
import ArrowDownSVG from '../assets/icons/ArrowDownSVG';

export default function SettingsScreen({ navigation }) {
    const [musicValue, setMusicValue] = useState(0.5);
    const [soundValue, setSoundValue] = useState(0.5);
    const [faqModalVisible, setFaqModalVisible] = useState(false);

    return (
        <LinearGradient colors={['#A71ABA', '#7109AD']} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
                        <ArrowBackSVG />
                    </TouchableOpacity>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.blocksRow}>
                    <TouchableOpacity style={styles.block}>
                        <PrivacySVG />
                        <Text style={styles.blockTitle}>
                            Privacy{'\n'}Policy
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: 44 }} />
                    <TouchableOpacity style={styles.block}>
                        <WebsiteSVG />
                        <Text style={styles.blockTitle}>
                            Developer's{'\n'}website
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.musicBlock}>
                    <View style={styles.musicRow}>
                        <Text style={styles.musicTitle}>Music</Text>
                        <MusicSVG />
                    </View>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            value={musicValue}
                            onValueChange={val => setMusicValue(val)}
                            minimumTrackTintColor="#80118E"
                            maximumTrackTintColor="rgba(167, 26, 186, 0.6)"
                            thumbTintColor="#7109AD"
                        />
                    </View>
                    <View style={styles.musicRow}>
                        <Text style={styles.musicTitle}>Sounds</Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            value={soundValue}
                            onValueChange={val => setSoundValue(val)}
                            minimumTrackTintColor="#80118E"
                            maximumTrackTintColor="rgba(167, 26, 186, 0.6)"
                            thumbTintColor="#7109AD"
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.manualButton}>
                    <Text style={styles.manualText}>Manual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.faqButton} onPress={() => setFaqModalVisible(true)}>
                    <Text style={styles.faqText}>FAQ</Text>
                </TouchableOpacity>
                <Image source={require('../assets/smallMan.png')} style={styles.smallMan} resizeMode="contain" />
                <Modal visible={faqModalVisible} transparent={true} animationType="slide">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>FAQ</Text>
                            <View style={styles.faqItem}>
                                <View style={styles.faqRow}>
                                    <Text style={styles.faqQuestion}>How to manage basket</Text>
                                    <ArrowDownSVG />
                                </View>
                                <View style={styles.separator} />
                            </View>
                            <View style={styles.faqItem}>
                                <View style={styles.faqRow}>
                                    <Text style={styles.faqQuestion}>How many levels in total</Text>
                                    <ArrowDownSVG />
                                </View>
                                <View style={styles.separator} />
                            </View>
                            <View style={styles.faqItem}>
                                <View style={styles.faqRow}>
                                    <Text style={styles.faqQuestion}>
                                        What happens if you{'\n'}miss the ball?
                                    </Text>
                                    <ArrowDownSVG />
                                </View>
                                <View style={styles.separator} />
                            </View>
                            <View style={styles.faqItem}>
                                <View style={styles.faqRow}>
                                    <Text style={styles.faqQuestion}>
                                        Is it possible to play the{'\n'}next lvl without{'\n'}completing the previous{'\n'}one?
                                    </Text>
                                    <ArrowDownSVG />
                                </View>
                                <View style={styles.separator} />
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setFaqModalVisible(false)}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 36,
    },
    headerContainer: {
        position: 'relative',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 55,
    },
    arrowButton: {
        position: 'absolute',
        left: 26,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    blocksRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
    },
    block: {
        width: 144,
        height: 135,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockTitle: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: '700',
        color: '#A71ABA',
        textAlign: 'center',
    },
    musicBlock: {
        borderRadius: 20,
        backgroundColor: '#FAFAFA',
        marginBottom: 36,
        paddingTop: 13,
        marginHorizontal: 30,
        paddingRight: 35,
        paddingLeft: 26,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    musicRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    musicTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: '#A71ABA',
    },
    sliderContainer: {
        marginBottom: 15,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    manualButton: {
        width: 163,
        height: 29,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        alignSelf: 'center',
    },
    manualText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        color: '#A71ABA',
    },
    faqButton: {
        height: 29,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal:25,
    },
    faqText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        color: '#A71ABA',
    },
    smallMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    modalBackground: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        height: 617,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 26,
        paddingRight: 30,
        marginHorizontal: 16,
    },
    modalTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: '700',
        color: '#410563',
        marginBottom: 36,
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        textAlign: 'center',
    },
    faqItem: {
        marginBottom: 23,
    },
    faqRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
    },
    faqQuestion: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        fontWeight: '700',
        color: '#410563',
    },
    separator: {
        height: 2,
        backgroundColor: '#410563B2',
        opacity: 0.54,
        marginBottom: 21,
    },
    closeButton: {
        width: 131,
        height: 29,
        borderRadius: 15,
        backgroundColor: '#410563',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    closeButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
});
