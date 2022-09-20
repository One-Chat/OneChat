import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function ChatViewHeader({ goBack, route }) {
  const colorScheme = useColorScheme();
  const { userName, userImg, status } = route.params;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView
        style={[
          styles.userContainer,
          {
            borderColor: colorScheme === 'dark' ? '#121212' : 'lightgray',
          },
        ]}
      >
        <View style={styles.imgContainer}>
          <Image source={userImg} style={styles.imgStyle} />
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.nameStyle,
              {
                color: colorScheme === 'dark' ? 'white' : 'black',
              },
            ]}
          >
            {userName}
          </Text>
          <View style={styles.statusContainer}>
            <Ionicons
              name='ellipse'
              size={8}
              color={status ? 'green' : 'gray'}
            />
            <Text style={styles.status}> {status ? 'Online' : 'Offline'} </Text>
          </View>
        </View>
        <TouchableOpacity onPress={goBack} style={styles.closeIcon}>
          <Ionicons
            name='close'
            size={30}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    position: 'relative',
  },
  userContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  imgContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nameStyle: {
    fontFamily: 'fira-sans-regular',
    fontSize: 23,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontFamily: 'fira-sans-light',
    padding: 3,
    color: 'gray',
  },
  infoContainer: {
    flexDirection: 'column',
    left: 20,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    bottom: 30,
  },
});
