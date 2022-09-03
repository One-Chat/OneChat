// Theme //
import {
  useColorScheme,
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatView({ navigation: { goBack } }) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.userContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/kirby.png')}
            style={styles.imgStyle}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Kirby</Text>
          <View style={styles.statusContainer}>
            <Ionicons name='ellipse' size={8} color='green' />
            <Text style={styles.status}>Online </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={goBack}>
          <Ionicons name='close' size={30} style={styles.closeIcon} />
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
  userContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
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
  name: {
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
