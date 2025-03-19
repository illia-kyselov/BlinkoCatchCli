import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HistoryCard = ({ title, imageSource, onPress }) => (
    <View style={styles.cardWrapper}>
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image
                source={imageSource}
                style={styles.cardImage}
                resizeMode="cover"
            />
        </TouchableOpacity>
        <View style={styles.overlayBlock}>
            <Text style={styles.overlayText} numberOfLines={1}>
                {title}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardWrapper: {
        width: '100%',
        paddingHorizontal: 42,
        alignSelf: 'center',
        position: 'relative',
        marginBottom: 42,
    },
    cardContainer: {
        height: 125,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#FFFFFF80',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    overlayBlock: {
        position: 'absolute',
        bottom: -15,
        left: 36,
        minWidth: 189,
        maxWidth: 312,
        paddingHorizontal: 10,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        alignSelf: 'flex-start',
    },
    overlayText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 13,
        color: '#410563',
        textAlign: 'center',
    },
});

export default HistoryCard;
