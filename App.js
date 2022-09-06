import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

// Fonts //
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Control//
import Controls from './app/Controls';
import LoginScreen from './app/LogInScreen';

//Navigation//
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Theme //
import { useColorScheme } from 'react-native';

////To-fix/////
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

export default function App() {
  const colorScheme = useColorScheme();

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
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar />
        {/* <Controls /> */}
        <LoginScreen />
      </View>
    </NavigationContainer>
  );
}

//// Style ////
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
