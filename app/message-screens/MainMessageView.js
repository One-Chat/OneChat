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
import MessageBox from './MessageBox';
import PinnedFriends from './PinnedFriends';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function MainMessageView({ navigation }) {
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
            placeholder='Search'
            onChangeText={onChangeText}
            value={text}
            style={
              colorScheme === 'dark'
                ? styles.textInputDark
                : styles.textInputLight
            }
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
  titleStyleLight: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  titleStyleDark: {
    color: 'white',
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  textInputLight: {
    width: '80%',
    padding: 10,
    alignSelf: 'center',
  },
  textInputDark: {
    color: 'white',
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
    alignSelf: 'center',
    width: '90%',
  },
  chatContainer: {
    flex: 10,
    marginBottom: 30,
  },
});
