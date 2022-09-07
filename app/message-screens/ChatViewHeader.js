import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Theme //
import { useColorScheme } from 'react-native';

export default function ChatViewHeader({ goBack, route }) {
  const colorScheme = useColorScheme();
  const { userName, userImg } = route.params;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView
        style={
          colorScheme === 'dark'
            ? styles.userContainerDark
            : styles.userContainerLight
        }
      >
        <View style={styles.imgContainer}>
          <Image source={userImg} style={styles.imgStyle} />
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={colorScheme === 'dark' ? styles.nameDark : styles.nameLight}
          >
            {userName}
          </Text>
          <View style={styles.statusContainer}>
            <Ionicons name='ellipse' size={8} color='green' />
            <Text style={styles.status}>Online </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={goBack}>
          <Ionicons
            name='close'
            size={30}
            color={colorScheme === 'dark' ? 'white' : 'black'}
            style={styles.closeIcon}
          />
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  userContainerLight: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  userContainerDark: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#121212',
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
  nameLight: {
    fontFamily: 'fira-sans-regular',
    fontSize: '23rem',
  },
  nameDark: {
    color: 'white',
    fontFamily: 'fira-sans-regular',
    fontSize: '23rem',
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
    justifyContent: 'space-evenly',
    left: 20,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 65,
  },
});
