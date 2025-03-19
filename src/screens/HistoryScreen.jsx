import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ArrowBackSVG from '../assets/icons/ArrowBackSVG';
import HistoryCard from '../components/HistoryCard';

export default function HistoryScreen({ navigation }) {
    const historyItems = useSelector(state => state.history?.items || []);

    const renderItem = ({ item }) => (
        <HistoryCard
            title={item.title}
            imageSource={item.image}
            onPress={() => navigation.navigate('HistoryDetail', { item })}
        />
    );

    return (
        <LinearGradient
            colors={['#A71ABA', '#7109AD']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.arrowButton}
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowBackSVG />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        History of the Plinko{'\n'}World
                    </Text>
                </View>
                <FlatList
                    data={historyItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.cardsList}
                    showsVerticalScrollIndicator={true}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 16,
    },
    headerContainer: {
        position: 'relative',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    arrowButton: {
        position: 'absolute',
        left: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    cardsList: {
        paddingBottom: 20,
    },
});
