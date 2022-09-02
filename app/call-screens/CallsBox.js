import { View, Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function CallsBox() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/bart.png')} style={styles.imgStyle} />

      <View style={styles.info}>
        <Text
          style={
            colorScheme === 'dark'
              ? styles.textStyleDark
              : styles.textStyleLight
          }
        >
          Bart
        </Text>
        <Text style={styles.timeStyle}>Sep 2 at 21:12</Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.timeStyle}> 46 sec</Text>
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
    borderWidth: 1,
    borderColor: 'white',
  },

  info: {
    justifyContent: 'space-evenly',
  },

  textStyleLight: {
    fontFamily: 'fira-sans-bold',
    fontSize: '18rem',
  },
  textStyleDark: {
    fontFamily: 'fira-sans-bold',
    fontSize: '18rem',
    color: 'white',
  },
  time: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  timeStyle: {
    fontFamily: 'fira-sans-light',
    color: 'gray',
  },
});
