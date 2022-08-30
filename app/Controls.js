import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Controls() {
  return (
    <BlurView intensity={20} tint='dark' style={styles.controlContainer}>
      <Image source={require('./assets/chat.png')} style={styles.image} />
      <Image source={require('./assets/telephone.png')} style={styles.image} />
      <Image source={require('./assets/rick.jpeg')} style={styles.profile} />
      <Image source={require('./assets/community.png')} style={styles.image} />
      <Image source={require('./assets/gear.png')} style={styles.image} />
    </BlurView>
  );
}

//// Style ////

const styles = StyleSheet.create({
  controlContainer: {
    zIndex: 5,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: '10%',
    height: '8%',
    width: '80%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 50,

    justifyContent: 'space-around',
  },
  image: {
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  profile: {
    alignSelf: 'center',
    height: 55,
    width: 55,

    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});
