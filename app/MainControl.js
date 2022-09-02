import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens //
import MainChat from './chat-screens/MainChatView';
import Profile from './profile-screens/Profile';
import Settings from './settings-screens/Settings';
import MainCallsView from './call-screens/MainCallsView';
import Community from './community-screens/Community';

const Tab = createBottomTabNavigator();

export default function MainControl() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabStyle,
        tabBarBackground: () => (
          <BlurView
            tint='dark'
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarShowLabel: false,

        // tabBarStyle: { display: 'none' },
      }}
      initialRouteName='Chat'
    >
      <Tab.Screen
        name='Chat'
        component={MainChat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons name='chatbubble-outline' size={30} />
            ) : (
              <Ionicons name='chatbubble' size={30} />
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
              <Ionicons name='call-outline' size={30} />
            ) : (
              <Ionicons name='call' size={30} />
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
              <Ionicons name='people-outline' size={30} />
            ) : (
              <Ionicons name='people' size={30} />
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
              <Ionicons name='settings-outline' size={30} />
            ) : (
              <Ionicons name='settings' size={30} />
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
    width: '90%',
    height: '70%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  tabBarImgActive: {
    width: '90%',
    height: '70%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#AC7088',
  },
});