import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/AntDesign';

// Navigation //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

// Theme //
import { useColorScheme } from 'react-native';

//Screens //
import AllCalls from './AllCalls';
import MissCalls from './MissedCalls';

export default function Calls({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContainer}>
        <Text
          style={[
            styles.titleStyle,
            {
              color: colorScheme === 'dark' ? 'white' : 'black',
            },
          ]}
        >
          Calls
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact');
          }}
        >
          <Icons
            name='contacts'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Tab.Navigator
        style={{ width: '100%', top: -20 }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 18,
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
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
