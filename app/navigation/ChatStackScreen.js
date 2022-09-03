import * as React from 'react';

// Navigation //
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ChatStack = createNativeStackNavigator();

// Screens //
import MainMessageView from '../message-screens/MainMessageView';
import ChatView from '../message-screens/ChatView';

export default function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name='MainMessageView'
        component={MainMessageView}
        options={{ headerShown: false }}
      />
      <ChatStack.Screen
        name='ChatView'
        component={ChatView}
        options={{ headerShown: false }}
      />
    </ChatStack.Navigator>
  );
}
