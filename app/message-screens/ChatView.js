import React, { useState, useCallback, useEffect } from 'react';
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

export default function ChatView({ navigation: { goBack }, route }) {
  const colorScheme = useColorScheme();
  const [messages, setMessages] = useState([]);
  const { userName, userImg, id, message } = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: id,
        text: message,

        createdAt: new Date(),
        user: {
          _id: 2,
          name: userName,
          avatar: userImg,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  // Send Img //
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

  // Gifted Chat Styles //
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
        // renderActions={() => renderActions()}
        user={{
          _id: 1,
          avatar: require('../assets/rick.jpeg'),
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
