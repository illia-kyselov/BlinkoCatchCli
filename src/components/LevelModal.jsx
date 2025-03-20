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
import CancelSVG from '../assets/levels/CancelSVG';
import modalMan from '../assets/modalMan.png';
import levelBackground from '../assets/levels/image.png';

import Level1ModalIcon from '../assets/levels/Level1SVG.jsx';
import Level2ModalIcon from '../assets/levels/Level2SVG.jsx';
import Level3ModalIcon from '../assets/levels/Level3SVG.jsx';
import Level4ModalIcon from '../assets/levels/Level4SVG.jsx';
import Level5ModalIcon from '../assets/levels/Level5SVG.jsx';
import Level6ModalIcon from '../assets/levels/Level6SVG.jsx';
import Level7ModalIcon from '../assets/levels/Level7SVG.jsx';
import Level8ModalIcon from '../assets/levels/Level8SVG.jsx';
import Level9ModalIcon from '../assets/levels/Level9SVG.jsx';
import Level10ModalIcon from '../assets/levels/Level10SVG.jsx';
import Level11ModalIcon from '../assets/levels/Level11SVG.jsx';
import Level12ModalIcon from '../assets/levels/Level12SVG.jsx';

const modalIconMapping = {
    Level1: Level1ModalIcon,
    Level2: Level2ModalIcon,
    Level3: Level3ModalIcon,
    Level4: Level4ModalIcon,
    Level5: Level5ModalIcon,
    Level6: Level6ModalIcon,
    Level7: Level7ModalIcon,
    Level8: Level8ModalIcon,
    Level9: Level9ModalIcon,
    Level10: Level10ModalIcon,
    Level11: Level11ModalIcon,
    Level12: Level12ModalIcon,
};

export default function LevelModal({ visible, onStart, onClose, levelData }) {
    if (!levelData) {return null;}

    const ModalIcon = modalIconMapping[levelData.modalIcon];

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
                            {ModalIcon && <ModalIcon />}
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
