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
import { auth, db } from '../../firebase';

// Auth //
import { AuthContext } from '../Auth-screens/AuthContextProvider';

export default function MainMessageView({ navigation }) {
  const colorScheme = useColorScheme();
  const [textInput, onChangeTextInput] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  // Search users //
  const handleSubmit = async () => {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('Email', '==', textInput));

    if (textInput !== q || user.Email === auth.currentUser.email) {
      setUser(null), setErr(true);
    }

    if (textInput === '') {
      setUser(null), setErr(false);
    }

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setErr(false);
        setUser(doc.data());
        onChangeTextInput('');
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

        {err && (
          <Text
            style={{
              left: 15,
              fontFamily: 'fira-sans-regular',
              fontSize: 20,
              margin: '5%',
              color: '#FA9494',
            }}
          >
            🥲 No User Found ! Try Another Email.
          </Text>
        )}

        {user && (
          <TouchableOpacity
            style={styles.searchResult}
            onPress={() => {
              navigation.navigate('ChatView', {
                userName: user.displayName,
                userImg: { uri: user.photoURL },
                userId: user.uid,
              });
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
              }}
              source={{
                uri: user.photoURL,
              }}
            />
            <Text
              style={{ left: 15, fontFamily: 'fira-sans-bold', fontSize: 20 }}
            >
              {user.displayName}
            </Text>
          </TouchableOpacity>
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
    backgroundColor: 'lightgray',
    borderRadius: 30,
    padding: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '5%',
  },
});
