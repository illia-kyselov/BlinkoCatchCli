import React from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';

import loseImage from '../assets/win/lose.png';
import sadMan from '../assets/win/sadMan.png';

export default function LoseModal({
    visible,
    onRetry,
    onMenuPress,
}) {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Image source={loseImage} style={styles.loseImage} />

                    <TouchableOpacity
                        style={styles.retryButton}
                        onPress={onRetry}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.retryButtonText}>Retry?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={onMenuPress}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.menuButtonText}>Go to menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={sadMan} style={styles.modalMan} />
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
    modalContainer: {
        width: 346,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 34,
    },
    loseImage: {
        marginBottom: 16,
        resizeMode: 'contain',
    },
    retryButton: {
        width: 150,
        height: 45,
        borderRadius: 22,
        backgroundColor: '#410563',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 23,
    },
    retryButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 17, // Увеличили текст
        color: '#FFFFFF',
    },
    menuButton: {
        width: 185,
        height: 45,
        borderRadius: 22,
        backgroundColor: '#410563',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 17,
        color: '#FFFFFF',
    },
    modalMan: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        resizeMode: 'contain',
        zIndex: 5,
    },
});
