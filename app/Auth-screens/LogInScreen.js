import { useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { AuthContext } from './AuthContextProvider';

// Voximplant //
import { Voximplant } from 'react-native-voximplant';

export default function LoginScreen({ navigation }) {
  const colorScheme = useColorScheme();
  const { logIn } = useContext(AuthContext);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Connect to the Voximplant client //
  const voximplant = Voximplant.getInstance();
  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();

      console.log(status);
    };
    connect();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.introContainer}>
          <Text
            style={[
              styles.titleStyle,
              {
                color: colorScheme === 'dark' ? 'white' : 'black',
              },
            ]}
          >
            Welcome Back !
          </Text>
          <Text style={{ color: 'gray', fontFamily: 'fira-sans-light' }}>
            The best way to connect.{' '}
          </Text>
        </SafeAreaView>

        <View style={styles.userInputs}>
          <TextInput
            mode='outlined'
            label='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry={secureTextEntry}
            mode='outlined'
            label='Password'
            right={
              <TextInput.Icon
                icon='eye'
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
              />
            }
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: 'gray',
                alignSelf: 'flex-end',
                marginTop: 10,
                fontFamily: 'fira-sans-light',
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttomContainer}>
          <Button
            mode='contained'
            style={{
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}
            onPress={() => logIn(email, password)}
          >
            Log In
          </Button>

          <Text
            style={{
              fontFamily: 'fira-sans-light',
              alignSelf: 'center',
              marginVertical: 50,
              color: 'gray',
            }}
          >
            ⎯⎯⎯⎯⎯⎯⎯ Or Log in with ⎯⎯⎯⎯⎯⎯⎯
          </Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Button>
              <Ionicons
                name='github'
                size={50}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            </Button>
            <Button>
              <Ionicons name='facebook' size={50} color='#4267B2' />
            </Button>
            <Button>
              <Ionicons name='google' size={50} color='#DB4437' />
            </Button>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 70 }}>
          <Text style={{ color: 'gray', fontFamily: 'fira-sans-light' }}>
            Not a member?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text
              style={{
                color: 'blue',
                fontFamily: 'fira-sans-light',
                marginLeft: 10,
              }}
            >
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//// Styles ////
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introContainer: {
    alignItems: 'center',
  },
  userInputs: {
    width: '70%',
    marginTop: 50,
  },
  buttomContainer: {
    marginTop: 30,
    width: '70%',
  },
  titleStyle: {
    fontSize: 40,
    fontFamily: 'fira-sans-regular',
    padding: 20,
  },
});
