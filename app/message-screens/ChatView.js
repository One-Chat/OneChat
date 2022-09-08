import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import { GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';

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

  // Gifted Chat Styles //
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={
          colorScheme === 'dark'
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'white' }
        }
        textInputStyle={
          colorScheme === 'dark' ? { color: 'white' } : { color: 'black' }
        }
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Ionicons
            name='send'
            size={21}
            color='#307acf'
            style={{ marginRight: 15, marginBottom: 15 }}
          />
        </View>
      </Send>
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
        alwaysShowSend={true}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
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
