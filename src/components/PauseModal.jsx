import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

import CloseSVG from '../assets/icons/CloseSVG';
import MuteSVG from '../assets/icons/MuteSVG';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PauseModal = ({
    visible,
    onClose,
    progress,
    onSettingsPress,
    onMenuPress,
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.headerRow}>
                        <Text style={styles.pauseTitle}>Pause</Text>
                        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                            <CloseSVG />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.progressRow}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.progressText}>Progress</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.muteButton} onPress={() => { }}>
                        <MuteSVG />
                    </TouchableOpacity>

                    <View style={styles.progressOuter}>
                        <View
                            style={[
                                styles.progressFill,
                                { width: 21 + ((125 - 21) * progress) / 5 },
                                progress >= 5 && styles.progressFillFull,
                            ]}
                        />
                        <Text
                            style={[
                                styles.progressBarText,
                                progress >= 5 && styles.progressTextFull,
                                { position: 'absolute' },
                            ]}
                        >
                            {progress}/5
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.mainButton} onPress={onSettingsPress}>
                            <Text style={styles.mainButtonText}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mainButton} onPress={onMenuPress}>
                            <Text style={styles.mainButtonText}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    source={require('../assets/modalMan.png')}
                    style={styles.modalMan}
                />
            </View>
        </Modal>
    );
};

export default PauseModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 346,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        paddingVertical: 14,
        paddingHorizontal: 18,
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pauseTitle: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#410563',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    progressText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#410563',
        textShadowColor: '#00000040',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    muteButton: {
        position: 'absolute',
        right: 19,
        top: 62,
        borderWidth: 3,
        borderColor: '#410563',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
    },
    progressOuter: {
        marginTop: 6,
        width: 125,
        height: 35,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#9916B6',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 38,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressFillFull: {
        borderRadius: 15,
        width: 125,
        backgroundColor: '#410563',
    },
    progressTextFull: {
        color: '#FFFFFF',
    },
    progressBarText: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 15,
        color: '#410563',
    },
    buttonsContainer: {
        marginTop: 23,
        alignItems: 'center',
    },
    mainButton: {
        width: 175,
        height: 39,
        borderRadius: 15,
        backgroundColor: '#410563',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainButtonText: {
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
