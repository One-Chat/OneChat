import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

// Screens //
import MainChat from './MainChat';
import Profile from './Profile';
import Settings from './Settings';
import Calls from './Calls';
import Community from './Community';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabStyle,
        tabBarBackground: () => (
          <BlurView
            tint='dark'
            intensity={20}
            style={StyleSheet.absoluteFill}
          />
        ),
        // tabBarItemStyle: { alignContent: 'center' },
        tabBarStyle: { display: 'none' },
      }}
      initialRouteName='Chat'
    >
      <Tab.Screen
        name='Chat'
        component={MainChat}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Community'
        component={Community}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFill,
  },
  tabStyle: {
    position: 'absolute',
    marginBottom: '10%',
    borderRadius: 50,
    overflow: 'hidden',
    // alignSelf: 'center',
    left: 40,
    width: '80%',
    justifyContent: 'space-around',
  },
});
