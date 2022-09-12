import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import MessageBox from './MessageBox';
import PinnedFriends from './PinnedFriends';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

// db //
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

// Auth //
import { AuthContext } from '../Auth-screens/AuthContextProvider';

export default function MainMessageView({ navigation }) {
  const colorScheme = useColorScheme();
  const [textInput, onChangeTextInput] = useState('');
  const [user, setUser] = useState(null);

  // Search users //
  const handleSubmit = async () => {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('Email', '==', textInput));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContainer}>
        <Text
          style={[
            styles.titleStyle,
            { color: colorScheme === 'dark' ? 'white' : 'black' },
          ]}
        >
          Messages
        </Text>

        {/* create new chat */}
        <TouchableOpacity
          onPress={() => {
            alert('Add a new conversation');
          }}
        >
          <Ionicons
            name='chatbubbles-outline'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* search input */}
      <View
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View
          style={[
            styles.searchSection,
            {
              backgroundColor: colorScheme === 'dark' ? '#121212' : 'lightgray',
            },
          ]}
        >
          <Ionicons
            name='search-outline'
            size={25}
            style={{ alignSelf: 'center', left: 3 }}
            color='gray'
          />
          <TextInput
            placeholder='Search users with email'
            onChangeText={onChangeTextInput}
            onSubmitEditing={handleSubmit}
            value={textInput}
            style={[
              styles.textInput,
              { color: colorScheme === 'dark' ? 'white' : 'black' },
            ]}
          />
        </View>

        {user && (
          <View style={styles.searchResult}>
            <Image source={user} style={styles.searchUserImg} />
            <Text>{user.displayName}</Text>
          </View>
        )}

        {/* Pinned Friends */}

        <View style={styles.friendContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PinnedFriends />
          </ScrollView>
        </View>

        {/* Chats */}
        <View style={styles.chatContainer}>
          <MessageBox navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
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
  textInput: {
    width: '80%',
    padding: 10,
    alignSelf: 'center',
  },
  searchSection: {
    flex: 0.7,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    margin: '5%',
  },
  friendContainer: {
    alignSelf: 'center',
    width: '90%',
  },
  chatContainer: {
    flex: 10,
    marginBottom: 30,
  },
  searchResult: {
    width: '80%',
  },
});
