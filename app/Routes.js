//Screens//
import MainControls from './MainControls';
import AuthStack from './Auth-screens/AuthStack';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { AuthContext } from './Auth-screens/AuthContextProvider';

//Navigation//
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const Routes = () => {
  const colorScheme = useColorScheme();

  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {user ? <MainControls /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
