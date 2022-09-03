import { View, Image, StyleSheet, Text, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

// Users info //
import { Calls } from '../users';

export default function CallsBox() {
  const colorScheme = useColorScheme();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Calls}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.mainContainer}>
          <Image source={item.userImg} style={styles.imgStyle} />

          <View style={styles.info}>
            <Text
              style={
                colorScheme === 'dark'
                  ? styles.textStyleDark
                  : styles.textStyleLight
              }
            >
              {item.userName}
            </Text>
            <Text style={styles.timeStyle}>{item.date}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.timeStyle}> {item.timestamp}</Text>
            <Ionicons
              name={
                item.status === 'incoming'
                  ? 'return-down-back-outline'
                  : 'return-down-forward'
              }
              size={20}
              color={!item.isMiss ? 'green' : 'red'}
            />
          </View>
        </View>
      )}
    />
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
