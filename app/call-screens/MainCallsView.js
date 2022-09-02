import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

//Screens
import AllCalls from './AllCalls';
import MissCalls from './MissedCalls';
import Controls from '../Controls';

export default function Calls({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Calls</Text>
        <TouchableOpacity
          onPress={() => {
            alert('Settings for calls ...');
          }}
        >
          <Ionicons name='ellipsis-vertical' size={25} style={{ right: 20 }} />
        </TouchableOpacity>
      </SafeAreaView>
      <Tab.Navigator
        style={{ width: '80%', alignSelf: 'center' }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: '18rem',
            fontFamily: 'fira-sans-regular',
          },
          tabBarStyle: { backgroundColor: 'transparent' },
          tabBarIndicatorStyle: { display: 'none' },
          tabBarActiveTintColor: '#AC7088',
        }}
      >
        <Tab.Screen name='All' component={AllCalls} />
        <Tab.Screen name='Missed' component={MissCalls} />
      </Tab.Navigator>

      {/* <Controls navigation={navigation} /> */}
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.07,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
