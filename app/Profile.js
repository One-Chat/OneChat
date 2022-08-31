import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Controls from './Controls';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens//
import SavedTabs from './saved/SavedTab';

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
          <Image
            source={require('./assets/edit.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.imgContainer}>
        <Image
          source={require('./assets/rick.jpeg')}
          style={styles.profileImg}
        />
      </View>

      <Text style={styles.userName}>Thomas Lin</Text>
      <Text style={styles.memberInfo}>Member Since 2022 </Text>
      <Text style={styles.status}> Pickle Rick ! 🥒 </Text>

      <View style={styles.btnContainer}>
        <SavedTabs />
      </View>

      <Controls navigation={navigation} />
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  imageStyle: {
    width: 24,
    height: 24,
    right: 25,
    top: 10,
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
