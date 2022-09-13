import React, { useState, useCallback, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import {
  GiftedChat,
  InputToolbar,
  Send,
  Actions,
} from 'react-native-gifted-chat';

// Header //
import ChatViewHeader from './ChatViewHeader';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { auth, db } from '../../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  getDocs,
  query,
} from 'firebase/firestore';

export default function ChatView({ navigation: { goBack }, route }) {
  const colorScheme = useColorScheme();
  const [messages, setMessages] = useState([]);
  const { userName, userImg, userId } = route.params;

  const currentUser = auth.currentUser;

  const combinedID =
    currentUser.uid > userId
      ? currentUser.uid + userId
      : userId + currentUser.uid;

  /// Get data From db ////
  useLayoutEffect(() => {
    const collectionRaf = collection(db, `chats/history/${combinedID}`);
    const q = query(collectionRaf, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return () => unsubscribe;
  }, []);

  /// Send Message ///
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // storing to firebase db //
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, `chats/history/${combinedID}`), {
      _id: _id,
      createdAt: createdAt,
      text: text,
      user: user,
    });
  }, []);

  /// Send Img ///
  const pickImage = async () => {
    //---- ASK for permissions ----//
    // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // const hasStoragePermissionGranted = status === 'granted';
    // if (!hasStoragePermissionGranted) return null;
    //---- ASK for permissions ----//

    // No permissions //
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      onSend({ image: result.uri });
    }
  };

  /// Gifted Chat Styles ///
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: colorScheme === 'dark' ? '#121212' : 'lightgray',
          borderRadius: 25,
          marginHorizontal: 20,
          height: 40,
          borderTopWidth: 0,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        textInputStyle={{
          marginTop: 15,
          color: colorScheme === 'dark' ? 'white' : 'black',
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Send {...props} containerStyle={{ padding: 0, marginRight: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name='send'
              size={21}
              color='#307acf'
              style={{ marginBottom: 16 }}
            />
          </View>
        </Send>
        <TouchableWithoutFeedback
          onPress={() => {
            alert('send voice message');
          }}
        >
          <View style={{ marginTop: 8, right: 25 }}>
            <Ionicons
              name='microphone'
              size={21}
              color='#307acf'
              style={{
                bottom: 15,
                right: 10,
                display: props.text === '' ? 'absolute' : 'none',
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pickImage}>
          <View style={{ marginTop: 8, right: 8 }}>
            <Ionicons
              name='photo'
              size={21}
              color='#307acf'
              style={{
                bottom: 15,
                right: 10,
                display: props.text === '' ? 'absolute' : 'none',
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const scrollToBottomComponent = () => {
    return <Ionicons name='angle-double-down' size={21} color='#333' />;
  };

  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: colorScheme === 'light' ? 'white' : 'black',
        },
      ]}
    >
      <ChatViewHeader goBack={goBack} route={route} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        isTyping={true}
        bottomOffset={32}
        // alwaysShowSend={true}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        showAvatarForEveryMessage={true}
        // renderActions={() => renderActions()}
        user={{
          _id: currentUser.uid,
          name: currentUser.displayName,
          avatar: { uri: currentUser.photoURL },
        }}
      />
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
