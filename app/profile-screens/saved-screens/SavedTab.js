//Screens//
import SavedLinks from './SavedLinks';
import SavedMedia from './SavedMedia';
import SavedMessages from './SavedMessages';

// Navigation //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function SavedTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: '16rem',
          fontFamily: 'fira-sans-regular',
        },
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarIndicatorStyle: { display: 'none' },
        tabBarActiveTintColor: '#AC7088',
      }}
    >
      <Tab.Screen name='Saved' component={SavedMessages} />
      <Tab.Screen name='Media' component={SavedMedia} />
      <Tab.Screen name='Links' component={SavedLinks} />
    </Tab.Navigator>
  );
}
