import React, { useEffect, useState } from 'react';
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

// db //
import { db, auth } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function MessageBox({ navigation }) {
  const colorScheme = useColorScheme();
  const currentUser = auth.currentUser;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('Email', '!=', currentUser.email));
      const querySnapshot = await getDocs(q);
      setFriends(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchFriends();
  }, []);

  return (
    <View
      style={[
        styles.container,
        { color: colorScheme === 'dark' ? 'white' : 'black' },
      ]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChatView', {
                status: item.isOnline,
                userName: item.displayName,
                userImg: {
                  uri: item.photoURL,
                },
                userId: item.uid,
              });
            }}
          >
            <View
              style={[
                styles.imgContainer,
                {
                  borderBottomColor:
                    colorScheme === 'dark' ? '#121212' : 'lightgray',
                },
              ]}
            >
              <Image
                source={{
                  uri: item.photoURL,
                }}
                style={styles.pictures}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={[
                  styles.textStyle,
                  { color: colorScheme === 'dark' ? 'white' : 'black' },
                ]}
              >
                {item.displayName}
              </Text>
              {/* <Text style={styles.messageStyle}> {item.message} </Text> */}
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeStyle}>
                {item.isOnline ? 'Online' : 'Offline'}
              </Text>
              <Ionicons
                name='ellipse'
                size={10}
                color={item.isOnline ? 'green' : 'gray'}
                style={{ padding: 5 }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    flexDirection: 'row',
    margin: '3%',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
  },
  imgContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
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
  infoContainer: {
    margin: '1.5%',
    justifyContent: 'center',
    position: 'absolute',
    left: '20%',
    paddingTop: 20,
  },
  messageStyle: {
    color: 'gray',
    fontFamily: 'fira-sans-light',
    marginLeft: -3,
  },
  timeContainer: {
    flexDirection: 'row',
    margin: '1.5%',
    justifyContent: 'center',
    paddingTop: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  timeStyle: {
    fontFamily: 'fira-sans-light',
    color: 'gray',
  },
});
