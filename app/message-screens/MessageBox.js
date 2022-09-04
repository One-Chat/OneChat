import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

// Navigation //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// Users info //
import { Users } from '../users';

export default function MessageBox({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={
        colorScheme === 'dark' ? styles.containerDark : styles.containerLight
      }
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChatView', {
                userName: item.userName,
                userImg: item.userImg,
              });
            }}
          >
            <View
              style={
                colorScheme === 'dark'
                  ? styles.imgContainerDark
                  : styles.imgContainerLight
              }
            >
              <Image source={item.userImg} style={styles.pictures} />
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={
                  colorScheme === 'dark'
                    ? styles.textStyleDark
                    : styles.textStyleLight
                }
              >
                {item.userName}
              </Text>
              <Text style={styles.messageStyle}> {item.message} </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeStyle}> {item.timestamp} </Text>
              <Ionicons name='checkmark-done' size={20} color='green' />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  containerLight: {
    padding: '3%',
    flexDirection: 'row',
    margin: '3%',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
  },
  containerDark: {
    padding: '3%',
    flexDirection: 'row',
    margin: '3%',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
  },
  imgContainerLight: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  imgContainerDark: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
  pictures: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  textStyleLight: {
    fontFamily: 'fira-sans-regular',
    fontSize: '18rem',
  },
  textStyleDark: {
    fontFamily: 'fira-sans-regular',
    fontSize: '18rem',
    color: 'white',
  },
  infoContainer: {
    margin: '1.5%',
    justifyContent: 'space-between',
    position: 'absolute',
    left: '20%',
    paddingTop: 15,
    paddingBottom: 15,
  },
  messageStyle: {
    color: 'gray',
    fontFamily: 'fira-sans-light',
    marginLeft: -3,
  },
  timeContainer: {
    margin: '1.5%',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  timeStyle: {
    fontFamily: 'fira-sans-light',
    color: 'gray',
  },
});
