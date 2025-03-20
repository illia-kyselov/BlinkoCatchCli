import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import StartScreen from './src/screens/StartScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import { persistor, store } from './src/store/store';
import HistoryDetail from './src/screens/HistoryDetail';
import GameScreen from './src/screens/GameScreen';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Start"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Start" component={StartScreen} />
                        <Stack.Screen name="Settings" component={SettingsScreen} />
                        <Stack.Screen name="History" component={HistoryScreen} />
                        <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
                        <Stack.Screen name="Game" component={GameScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
