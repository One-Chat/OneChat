import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Controls from '../Controls';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens//
import SavedTabs from './saved-screens/SavedTab';

const Tab = createMaterialTopTabNavigator();

export default function Profile({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContiner}>
        <Text style={styles.titleStyle}>Profile</Text>
        <TouchableOpacity
          onPress={() => {
            alert('Edit Profile');
          }}
        >
          <Ionicons name='create-outline' size={25} style={{ right: 20 }} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/rick.jpeg')}
          style={styles.profileImg}
        />
      </View>

      <Text style={styles.userName}>Thomas Lin</Text>
      <Text style={styles.memberInfo}>Member Since 2022 </Text>
      <Text style={styles.status}> Pickle Rick ! 🥒 </Text>

      <View style={styles.btnContainer}>
        <SavedTabs />
      </View>

      {/* <Controls navigation={navigation} /> */}
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
  titleStyle: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  profileImg: {
    alignSelf: 'center',
    borderRadius: 200,
    borderWidth: 5,
    width: 200,
    height: 200,
  },
  userName: {
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
  status: {
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
