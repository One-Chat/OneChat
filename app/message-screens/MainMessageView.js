import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MessageBox from './MessageBox';
import PinnedFriends from './PinnedFriends';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

// db //
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';

export default function MainMessageView({ navigation }) {
  const colorScheme = useColorScheme();
  const [textInput, onChangeTextInput] = useState('');
  const [friends, setFriends] = useState([]);
  const [filteredFriend, setFilteredFriend] = useState([]);

  const currentUser = auth.currentUser;

  // Fetch users from db //
  useEffect(() => {
    const fetchFriends = async () => {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('Email', '!=', currentUser.email));
      const querySnapshot = await getDocs(q);
      setFriends(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setFilteredFriend(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchFriends();
  }, []);

  // Search users //
  useEffect(() => {
    const newContacts = friends.filter((contact) =>
      contact.displayName.toLowerCase().includes(textInput.toLocaleLowerCase())
    );
    setFilteredFriend(newContacts);
  }, [textInput]);

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
            placeholder='Search'
            onChangeText={onChangeTextInput}
            value={textInput}
            style={[
              styles.textInput,
              { color: colorScheme === 'dark' ? 'white' : 'black' },
            ]}
          />
        </View>
        {/* Pinned Friends */}
        <View style={styles.friendContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PinnedFriends />
          </ScrollView>
        </View>
        {/* Chats */}
        <View style={styles.chatContainer}>
          <MessageBox navigation={navigation} filteredFriend={filteredFriend} />
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
    backgroundColor: 'lightgray',
    borderRadius: 30,
    padding: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '5%',
  },
});
