import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        tabBarStyle: { display: 'none' },
      }}
      initialRouteName='Chat'
    >
      <Tab.Screen
        name='Chat'
        component={MainChat}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Community'
        component={Community}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
