import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function PinnedFriends({ profilePicture, name }) {
  return (
    <View style={styles.container}>
      <Image source={profilePicture} style={styles.profilePic} />
      <View style={styles.name}>
        <Text style={{ fontFamily: 'fira-sans-regular' }}>{name}</Text>
      </View>
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    width: 80,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#F0ECE3',
  },
  profilePic: {
    flex: 1,
    top: 10,
    alignSelf: 'center',
    width: '62%',

    borderRadius: 50,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
