import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function ChatBox() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/mobu.png')} style={styles.pictures} />
      <View style={styles.info}>
        <Text
          style={
            colorScheme === 'dark'
              ? styles.textStyleDark
              : styles.textStyleLight
          }
        >
          Mobu
        </Text>
        <Text style={{ color: 'gray' }}>Typing ...</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeStyle}> 12:45 </Text>
        <Ionicons name='checkmark-done' size={20} color='green' />
      </View>
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flexDirection: 'row',
    margin: '3%',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  pictures: {
    height: 50,
    width: 50,
    marginRight: '5%',
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  textStyleLight: {
    fontFamily: 'fira-sans-bold',
    fontSize: '18rem',
  },
  textStyleDark: {
    fontFamily: 'fira-sans-bold',
    fontSize: '18rem',
    color: 'white',
  },
  info: {
    justifyContent: 'space-evenly',
  },
  time: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  timeStyle: {
    fontFamily: 'fira-sans-light',
    color: 'gray',
  },
});
