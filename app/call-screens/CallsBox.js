import { View, Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CallsBox() {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/bart.png')} style={styles.imgStyle} />

      <View style={styles.info}>
        <Text
          style={{
            fontFamily: 'fira-sans-bold',
            fontSize: '18rem',
          }}
        >
          Bart
        </Text>
        <Text style={{ color: 'gray' }}>Sep 2 at 21:12</Text>
      </View>
      <View style={styles.time}>
        <Text style={{ color: 'gray' }}> 46 sec</Text>
        <Ionicons name='return-down-forward' size={20} color='green' />
      </View>
    </View>
  );
}

//// styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: '3%',
  },
  imgStyle: {
    height: 50,
    width: 50,
    marginRight: '5%',
    alignSelf: 'center',
    borderRadius: 100,
  },

  info: {
    justifyContent: 'space-evenly',
  },
  time: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
});
