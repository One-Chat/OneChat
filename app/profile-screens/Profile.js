import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigation //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

//Screens//
import SavedTabs from './saved-screens/SavedTab';

// Theme //
import { useColorScheme } from 'react-native';

export default function Profile() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContiner}>
        <Text
          style={
            colorScheme === 'dark'
              ? styles.titleStyleDark
              : styles.titleStyleLight
          }
        >
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('Edit Profile');
          }}
        >
          <Ionicons
            name='create-outline'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/rick.jpeg')}
          style={styles.profileImg}
        />
      </View>

      <Text
        style={
          colorScheme === 'dark' ? styles.userNameDark : styles.userNameLight
        }
      >
        Thomas Lin
      </Text>
      <Text style={styles.memberInfo}>Member Since 2022</Text>
      <Text
        style={colorScheme === 'dark' ? styles.statusDark : styles.statusLight}
      >
        Pickle Rick ! 🥒{' '}
      </Text>

      <View style={styles.btnContainer}>
        <SavedTabs />
      </View>
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContiner: {
    flex: 0.13,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyleLight: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  titleStyleDark: {
    color: 'white',
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  profileImg: {
    alignSelf: 'center',
    borderRadius: 200,
    borderWidth: 3,
    width: 200,
    height: 200,
    borderColor: '#AC7088',
  },
  userNameLight: {
    fontFamily: 'fira-sans-regular',
    fontSize: '40rem',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '2%',
  },
  userNameDark: {
    color: 'white',
    fontFamily: 'fira-sans-regular',
    fontSize: '40rem',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '2%',
  },
  memberInfo: {
    fontFamily: 'fira-sans-light',
    alignSelf: 'center',
    color: 'gray',
  },
  statusLight: {
    borderColor: 'black',
    marginTop: '5%',
    fontFamily: 'fira-sans-regular',
    alignSelf: 'center',
    padding: '2.5%',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  statusDark: {
    color: 'white',
    borderColor: 'white',
    marginTop: '5%',
    fontFamily: 'fira-sans-regular',
    alignSelf: 'center',
    padding: '2.5%',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnContainer: {
    flex: 0.7,
    margin: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
