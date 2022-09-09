import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  useLayoutEffect,
} from 'react';
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
import { AuthContext } from '../Auth-screens/AuthContextProvider';
import { auth, db } from '../../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import { async } from '@firebase/util';

export default function ChatView({ navigation: { goBack }, route }) {
  const colorScheme = useColorScheme();
  const [messages, setMessages] = useState([]);
  const { userName, userImg, id, message } = route.params;
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: id,
  //       text: message,

  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: userName,
  //         avatar: userImg,
  //       },
  //     },
  //   ]);
  // }, []);

  // useLayoutEffect(async () => {
  //   const unsubscribe = await getDocs(db, 'chats');
  //   orderBy('createdAt', 'desc');
  //   onSnapshot((snapshot) =>
  //     setMessages(
  //       snapshot.docs.map((doc) => ({
  //         _id: doc.data()._id,
  //         createdAt: doc.data().createdAt.toDate(),
  //         text: doc.data().text,
  //         user: doc.data().user,
  //       }))
  //     )
  //   );
  //   return unsubscribe;
  // }, []);

  /// Send Message ///

  const userEmail = user.email;
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
    try {
      // save to firebase db //
      const docRef = addDoc(collection(db, `chats/${userEmail}/${userName}`), {
        _id: _id,
        createdAt: createdAt,
        text: text,
        user: user,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }, []);

  /// Send Img ///
  const pickImage = async (onSend) => {
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
      onSend([{ image: result.uri }]);
      return result.uri;
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
          _id: user?.email,
          name: user?.displayName,
          avatar: { uri: user?.photoURL },
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
