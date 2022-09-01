import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mobu.png')} style={styles.pictures} />
      <View style={styles.info}>
        <Text
          style={{
            fontFamily: 'fira-sans-bold',
            fontSize: '18rem',
          }}
        >
          Mobu
        </Text>
        <Text style={{ color: 'gray' }}>Typing ...</Text>
      </View>
      <Text style={styles.time}>12:45</Text>
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    flexDirection: 'row',
    margin: '4%',
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  pictures: {
    height: '100%',
    width: '12%',
    marginRight: '5%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  info: {
    justifyContent: 'space-evenly',
    // padding: 5,
  },
  time: {
    flex: 1,
    flexDirection: 'column',
    margin: '4%',
    textAlign: 'right',
    alignSelf: 'flex-start',
    color: 'gray',
  },
});
