import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Chat from './Chat';
import Controls from './Controls';
import PinnedFriends from './PinnedFriends';

export default function MainChat({ navigation }) {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.title}>
        <Text style={styles.titleStyle}>Chats</Text>

        {/* create new chat */}
        <TouchableOpacity
          onPress={() => {
            alert('you clicked me');
          }}
        >
          <Image
            source={require('./assets/icon-add-message.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* search input */}
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.searchSection}>
          <Image
            source={require('./assets/icon-search.png')}
            style={styles.searchIcon}
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
              profilePicture={require('./assets/kirby.png')}
              name='Kirby'
            />
            <PinnedFriends
              profilePicture={require('./assets/one.jpeg')}
              name='Saitama'
            />
            <PinnedFriends
              profilePicture={require('./assets/mobu.png')}
              name='Mobu'
            />
            <PinnedFriends
              profilePicture={require('./assets/bart.png')}
              name='Bart'
            />
            <PinnedFriends
              profilePicture={require('./assets/bart.png')}
              name='Bart'
            />
            <PinnedFriends
              profilePicture={require('./assets/bart.png')}
              name='Bart'
            />
          </ScrollView>
        </View>

        {/* Chats */}
        <View style={styles.chatContainer}>
          {/* TEST .... */}
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </View>
      </ScrollView>
      <Controls navigation={navigation} />
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    flex: 0.05,
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
  textInput: {
    width: '80%',
    padding: 10,
    alignSelf: 'center',
  },
  searchIcon: {
    padding: 12,
    margin: 7,
    height: 24,
    width: 24,
  },
  searchSection: {
    flex: 0.7,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
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
