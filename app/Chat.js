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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: '4%',
    alignSelf: 'center',
    width: '90%',
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  pictures: {
    margin: '3%',
    height: '70%',
    width: '12%',
    borderRadius: 100,
  },
  info: {
    justifyContent: 'space-around',
    margin: '3%',
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
