import React, { useState, useCallback, useEffect } from 'react';
import { View, Image } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

// Header //
import ChatViewHeader from './ChatViewHeader';

export default function ChatView({ navigation: { goBack }, route }) {
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

  return (
    <View style={{ flex: 1 }}>
      <ChatViewHeader goBack={goBack} route={route} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        bottomOffset={32}
        user={{
          _id: 1,
          avatar: require('../assets/rick.jpeg'),
        }}
      />
    </View>
  );
}
