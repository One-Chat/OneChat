import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

// Fonts //
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Screens//
import MainChat from './app/MainChat';
import Profile from './app/Profile';
import Settings from './app/Settings';
import Calls from './app/Calls';
import Community from './app/Community';

//Navigation//
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  //// Load Fonts ////
  const [fontsLoaded] = useFonts({
    'fira-sans-light': require('./app/assets/fonts/FiraSans-Light.ttf'),
    'fira-sans-regular': require('./app/assets/fonts/FiraSans-Regular.ttf'),
    'fira-sans-bold': require('./app/assets/fonts/FiraSans-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen
            name='Chat'
            component={MainChat}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Calls' component={Calls} />
          <Stack.Screen name='Community' component={Community} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

//// Style ////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
