import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Controls from './Controls';

export default function Profile({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text style={styles.titleStyle}>Profile</Text>
      </SafeAreaView>
      <TouchableHighlight
        onPress={() => {
          alert('change profile picture');
        }}
      >
        <Image
          source={require('./assets/rick.jpeg')}
          style={styles.profileImg}
        />
      </TouchableHighlight>
      <Controls navigation={navigation} />
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleStyle: {
    fontSize: '40%',
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  profileImg: {
    alignSelf: 'center',
    borderRadius: 200,
    borderWidth: 5,
    shadowColor: 'black',
    shadowOffset: { width: 20, height: -26 },
    // shadowRadius: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
