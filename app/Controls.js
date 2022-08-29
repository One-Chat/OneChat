import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Controls() {
  return (
    <View style={styles.controlContainer}>
      <Image source={require('./assets/chat.png')} style={styles.image} />
      <Image source={require('./assets/telephone.png')} style={styles.image} />
      <Image source={require('./assets/rick.jpeg')} style={styles.profile} />
      <Image source={require('./assets/community.png')} style={styles.image} />
      <Image source={require('./assets/gear.png')} style={styles.image} />
    </View>
  );
}

//// Style ////

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    flex: 1.5,
    marginBottom: '10%',
    height: '20%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(58, 64, 60, 0.6)',
    justifyContent: 'space-around',
  },
  image: {
    zIndex: 10,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  profile: {
    zIndex: 10,
    alignSelf: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});
