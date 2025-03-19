import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import modalMan from '../assets/modalMan.png';
import winImg from '../assets/win/win.png';
import star1 from '../assets/win/1.png';
import star2 from '../assets/win/2.png';
import star3 from '../assets/win/3.png';
import star4 from '../assets/win/4.png';

const WinModal = ({ visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.winOverlay}>
                <Image source={modalMan} style={styles.modalMan} />

                <View style={styles.winContainer}>
                    <Image source={star1} style={styles.star1} />
                    <Image source={star2} style={styles.star2} />
                    <Image source={star3} style={styles.star3} />
                    <Image source={star4} style={styles.star4} />

                    <Image source={winImg} style={styles.winImage} />

                    <Text style={styles.winText}>
                        The goal of collecting 5{"\n"}balls has been{"\n"}achieved.
                    </Text>

                    <TouchableOpacity style={styles.winButton} onPress={onClose}>
                        <Text style={styles.winButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default WinModal;

const styles = StyleSheet.create({
    winOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    winContainer: {
        height: 361,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    winImage: {
        marginBottom: 7,
        resizeMode: 'contain',
    },
    winText: {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#410563',
        marginBottom: 21,
    },
    winButton: {
        width: 175,
        height: 39,
        borderRadius: 15,
        backgroundColor: '#410563',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 34,
    },
    winButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFFFFF',
    },
    star1: {
        position: 'absolute',
        top: 0,
        right: 0,
        resizeMode: 'contain',
    },
    star2: {
        position: 'absolute',
        top: 90,
        left: 6,
        resizeMode: 'contain',
    },
    star3: {
        position: 'absolute',
        top: 155,
        left: 12,
        resizeMode: 'contain',
    },
    star4: {
        position: 'absolute',
        top: 110,
        right: 0,
        resizeMode: 'contain',
    },
    modalMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        resizeMode: 'contain',
        zIndex: 5,
    },
});
