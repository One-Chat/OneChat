import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ChatBox from './ChatBox';
import PinnedFriends from './PinnedFriends';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function MainChatView() {
  const colorScheme = useColorScheme();
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContainer}>
        <Text
          style={
            colorScheme === 'dark'
              ? styles.titleStyleDark
              : styles.titleStyleLight
          }
        >
          Chats
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={
            colorScheme === 'dark'
              ? styles.searchSectionDark
              : styles.searchSectionLight
          }
        >
          <Ionicons
            name='search-outline'
            size={25}
            style={{ alignSelf: 'center', left: 3 }}
            color='gray'
          />
          <TextInput
            placeholder='Search Chat ...'
            onChangeText={onChangeText}
            value={text}
            style={styles.textInput}
          />
        </View>

        {/* Pinned Friends */}

        <View style={styles.friendContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PinnedFriends
              profilePicture={require('../assets/kirby.png')}
              name='Kirby'
            />
            <PinnedFriends
              profilePicture={require('../assets/one.jpeg')}
              name='Saitama'
            />
            <PinnedFriends
              profilePicture={require('../assets/mobu.png')}
              name='Mobu'
            />
            <PinnedFriends
              profilePicture={require('../assets/bart.png')}
              name='Bart'
            />
            <PinnedFriends
              profilePicture={require('../assets/bart.png')}
              name='Bart'
            />
            <PinnedFriends
              profilePicture={require('../assets/bart.png')}
              name='Bart'
            />
          </ScrollView>
        </View>

        {/* Chats */}
        <View style={styles.chatContainer}>
          {/* TEST .... */}
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
        </View>
      </ScrollView>
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
  textInput: {
    width: '80%',
    padding: 10,
    alignSelf: 'center',
  },
  searchSectionLight: {
    backgroundColor: 'lightgray',
    flex: 0.7,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    margin: '5%',
  },
  searchSectionDark: {
    backgroundColor: '#121212',
    flex: 0.7,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    margin: '5%',
  },
  friendContainer: {
    flex: 2,
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
  },
  chatContainer: {
    flex: 11,
  },
});
