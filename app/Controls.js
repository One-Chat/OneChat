import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Controls({ navigation }) {
  return (
    <BlurView intensity={20} tint='dark' style={styles.controlContainer}>
      {/* Chat */}
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Chat');
        }}
      >
        <Image source={require('./assets/chat.png')} style={styles.image} />
      </TouchableWithoutFeedback>

      {/* Calls */}
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Calls');
        }}
      >
        <Image
          source={require('./assets/telephone.png')}
          style={styles.image}
        />
      </TouchableWithoutFeedback>

      {/* Profile */}
      <TouchableWithoutFeedback
        style={{ justifyContent: 'center' }}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Image source={require('./assets/rick.jpeg')} style={styles.profile} />
      </TouchableWithoutFeedback>

      {/* Community */}
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Community');
        }}
      >
        <Image
          source={require('./assets/community.png')}
          style={styles.image}
        />
      </TouchableWithoutFeedback>

      {/* Settings */}
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Settings');
        }}
      >
        <Image source={require('./assets/gear.png')} style={styles.image} />
      </TouchableWithoutFeedback>
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
