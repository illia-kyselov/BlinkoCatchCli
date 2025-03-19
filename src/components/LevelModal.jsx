import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import CancelSVG from '../assets/levels/CancelSVG.jsx';
import modalMan from '../assets/modalMan.png';
import levelBackground from '../assets/levels/image.png';

export default function LevelModal({ visible, onStart, onClose, levelData }) {
    if (!levelData) return null;

    const ModalIcon = levelData.modalIcon;

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modalWrapper}>
                    <ImageBackground
                        source={levelBackground}
                        style={styles.modalContainer}
                        resizeMode="cover"
                        imageStyle={{ opacity: 0.13 }}
                    >
                        <Text style={styles.headerText}>CATCH THE BALLS</Text>
                        <Text style={styles.levelNumber}>Lvl {levelData.id}</Text>
                        <View style={styles.rowContainer}>
                            <ModalIcon />
                            <Text style={styles.levelTitle}>{levelData.title}</Text>
                        </View>
                        <TouchableOpacity style={styles.continueButton} onPress={onStart}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <TouchableOpacity style={styles.cancelIconContainer} onPress={onClose}>
                        <CancelSVG />
                    </TouchableOpacity>
                </View>
                <Image source={modalMan} style={styles.modalMan} resizeMode="contain" />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        position: 'relative',
    },
    modalContainer: {
        width: 346,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        paddingTop: 14,
        paddingBottom: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelIconContainer: {
        position: 'absolute',
        top: -21.5,
        right: -21.5,
    },
    headerText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#410563',
        textAlign: 'center',
        marginBottom: 2,
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    levelNumber: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#410563',
        textAlign: 'center',
        marginBottom: 40,
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 49,
    },
    levelTitle: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 23,
        color: '#4E0058',
        marginLeft: 20,
        maxWidth: 114,
    },
    continueButton: {
        width: 175,
        height: 39,
        borderRadius: 15,
        backgroundColor: '#410563',
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFFFFF',
    },
    modalMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
});
