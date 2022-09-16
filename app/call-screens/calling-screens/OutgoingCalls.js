import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const OutgoingCalls = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/mobu.png')}
        style={styles.backgroundImg}
        blurRadius={10}
      />
      <View style={styles.infoContainer}>
        <Image
          source={require('../../assets/mobu.png')}
          style={styles.profileImg}
        />
        <Text style={styles.name}>Mobu</Text>
        <Text style={styles.callInfo}>Calling ... </Text>
      </View>

      <View style={styles.btnContainer}>
        <View>
          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: 'gray',
              },
            ]}
          >
            <Icons name='microphone-off' size={30} color='white' />
          </View>
          <Text style={styles.text}>Mute</Text>
        </View>
        <View style={styles.midIcon}>
          <Icons name='phone-hangup' size={40} color='white' />
        </View>
        <View>
          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: 'gray',
              },
            ]}
          >
            <Icons name='volume-high' size={30} color='white' />
          </View>
          <Text style={styles.text}>Speaker</Text>
        </View>
      </View>
    </View>
  );
};

export default OutgoingCalls;

//// Styles ////
const styles = StyleSheet.create({
  backgroundImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    fontFamily: 'fira-sans-regular',
    fontSize: 35,
    padding: 20,
  },
  callInfo: {
    fontFamily: 'fira-sans-light',

    fontSize: 15,
  },
  infoContainer: {
    top: 140,
    alignItems: 'center',
  },
  btnContainer: {
    width: '70%',
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 100,
    justifyContent: 'space-between',
  },
  iconStyles: {
    padding: 15,
    borderRadius: 40,
  },
  midIcon: {
    padding: 20,
    bottom: 20,
    borderRadius: 50,
    backgroundColor: '#d6292e',
  },
  text: {
    alignSelf: 'center',
    top: 15,
    fontFamily: 'fira-sans-light',
  },
});
