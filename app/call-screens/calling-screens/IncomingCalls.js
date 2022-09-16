import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const IncomingCalls = () => {
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
        <Text style={styles.callInfo}>Incoming call</Text>
      </View>

      <View style={styles.btnContainer}>
        <View>
          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: '#d6292e',
              },
            ]}
          >
            <Icons name='phone-hangup' size={40} color='white' />
          </View>
          <Text style={styles.text}>Decline</Text>
        </View>
        <View style={styles.midIcon}>
          <Icons name='chat' size={30} color='white' />
        </View>
        <View>
          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: '#3ac54e',
              },
            ]}
          >
            <Icons name='phone' size={40} color='white' />
          </View>
          <Text style={styles.text}>Accpet</Text>
        </View>
      </View>
    </View>
  );
};

export default IncomingCalls;

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
    width: '60%',
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 100,
    justifyContent: 'space-between',
  },
  iconStyles: {
    padding: 20,
    borderRadius: 40,
  },
  midIcon: {
    bottom: 65,
    padding: 15,
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  text: {
    alignSelf: 'center',
    top: 15,
    fontFamily: 'fira-sans-light',
  },
});
