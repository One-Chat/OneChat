import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';

const MainCallingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/mobu.png')}
        style={styles.backgroundImg}
        blurRadius={0}
      />
      <View style={styles.smallCallScreen}>
        <Image
          source={require('../../assets/rick.jpeg')}
          style={styles.profileImg}
        />
      </View>
      <BlurView intensity={50} tint='dark' style={styles.blurContainer}>
        <View style={styles.btnContainer}>
          <View style={styles.iconStyles}>
            <Icons name='camera-flip-outline' size={30} color='white' />
          </View>
          <View style={styles.iconStyles}>
            <Icons name='camera-off' size={30} color='white' />
          </View>
          <View style={styles.iconStyles}>
            <Icons name='microphone-off' size={30} color='white' />
          </View>

          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: '#d6292e',
              },
            ]}
          >
            <Icons name='phone-hangup' size={30} color='white' />
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default MainCallingScreen;

//// Styles ////
const styles = StyleSheet.create({
  backgroundImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  profileImg: {
    height: 200,
    width: 130,
    borderRadius: 10,
  },

  smallCallScreen: {
    top: 70,
    right: 25,
    alignSelf: 'flex-end',
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  blurContainer: {
    height: 90,
    width: '80%',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 50,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 50,
  },
  iconStyles: {
    padding: 12,
    borderRadius: 40,
    marginHorizontal: 10,
    backgroundColor: 'gray',
  },

  text: {
    alignSelf: 'center',
    top: 15,
    fontFamily: 'fira-sans-light',
  },
});
