import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MainChat from './app/MainChat';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <MainChat />
    </View>
  );
}

//// Style ////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});
