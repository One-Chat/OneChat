import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens //
import MainChat from './MainChat';
import Profile from './Profile';
import Settings from './Settings';
import Calls from './Calls';
import Community from './Community';

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
          tabBarIcon: () => <Ionicons name='chatbubble-outline' size={30} />,
        }}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name='call-outline' size={30} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('./assets/rick.jpeg')}
              style={styles.tabBarImg}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Community'
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name='people-outline' size={30} />,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name='cog-outline' size={30} />,
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
});
