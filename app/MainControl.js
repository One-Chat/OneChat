import { BlurView } from 'expo-blur';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigation //
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Screens //
import Profile from './profile-screens/Profile';
import Settings from './settings-screens/Settings';
import MainCallsView from './call-screens/MainCallsView';
import Community from './community-screens/Community';
import ChatStackScreen from './navigation/ChatStackScreen';

// Theme //
import { useColorScheme } from 'react-native';

export default function MainControl() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabStyle,
        tabBarBackground: () => (
          <BlurView
            tint={colorScheme === 'dark' ? 'light' : 'dark'}
            intensity={20}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarShowLabel: false,
      }}
      initialRouteName='Chat'
    >
      <Tab.Screen
        name='Chat'
        component={ChatStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons
                name='chatbubble-outline'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ) : (
              <Ionicons
                name='chatbubble'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ),
        }}
      />
      <Tab.Screen
        name='Calls'
        component={MainCallsView}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons
                name='call-outline'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ) : (
              <Ionicons
                name='call'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Image
                source={require('./assets/rick.jpeg')}
                style={styles.tabBarImg}
              />
            ) : (
              <Image
                source={require('./assets/rick.jpeg')}
                style={styles.tabBarImgActive}
              />
            ),
        }}
      />
      <Tab.Screen
        name='Community'
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons
                name='people-outline'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ) : (
              <Ionicons
                name='people'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons
                name='settings-outline'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ) : (
              <Ionicons
                name='settings'
                size={30}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            ),
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
    paddingBottom: 0,
    justifyContent: 'space-around',
  },
  tabBarImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  tabBarImgActive: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#AC7088',
  },
});
