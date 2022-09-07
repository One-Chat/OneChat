import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';

// Fonts //
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Route//
import Routes from './app/Routes';

////To-fix/////
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

// Auth //
import { AuthProvider } from './app/Auth-screens/AuthContextProvider';

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
    <AuthProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar />
        <Routes />
      </View>
    </AuthProvider>
  );
}
