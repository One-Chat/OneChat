import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/mobu.png')} style={styles.pictures} />
      <View style={styles.info}>
        <Text style={{ fontFamily: 'fira-sans-bold', fontSize: 18 }}>Mobu</Text>
        <Text style={{ color: 'gray' }}>Typing ...</Text>
      </View>

      <Text style={styles.time}>12:45</Text>
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: '4%',
    alignSelf: 'center',
    width: '90%',
    height: '11%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  pictures: {
    height: '80%',
    width: '12%',
    marginRight: '3%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  info: {
    justifyContent: 'space-evenly',

    padding: 5,
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
