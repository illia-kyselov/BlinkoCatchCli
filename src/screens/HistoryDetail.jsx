import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import ArrowBackSVG from '../assets/icons/ArrowBackSVG';

export default function HistoryDetail() {
    const { params: { item } } = useRoute();
    const navigation = useNavigation();

    const isLeft = item.isLeft;

    return (
        <LinearGradient colors={['#A71ABA', '#7109AD']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
                        <ArrowBackSVG />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        History of the Plinko{'\n'}World
                    </Text>
                </View>

                <Image source={item.image} style={styles.mainImage} resizeMode="cover" />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {item.description}
                    </Text>
                </View>
                <Image
                    source={item.sideImage}
                    style={[styles.sideImage, isLeft ? styles.leftSide : styles.rightSide]}
                    resizeMode="contain"
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: 36,
    },
    header: {
        position: 'relative',
        marginBottom: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowButton: {
        position: 'absolute',
        left: 16,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
    },
    mainImage: {
        width: '100%',
        height: 224,
    },
    descriptionContainer: {
        height: 369,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingTop: 13,
        paddingHorizontal: 23,
        marginTop: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 18,
        color: '#410563',
        textAlign: 'center',
    },
    sideImage: {
        position: 'absolute',
        bottom: 0,
    },
    leftSide: {
        left: 0,
    },
    rightSide: {
        right: 0,
    },
});
