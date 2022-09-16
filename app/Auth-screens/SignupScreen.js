import { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { AuthContext } from './AuthContextProvider';

export default function SignupScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

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
            Create Account
          </Text>
          <Text style={{ color: 'gray', fontFamily: 'fira-sans-light' }}>
            Get started with your journey.
          </Text>
        </SafeAreaView>

        <View style={styles.userInputs}>
          <TextInput
            mode='outlined'
            label='Full Name'
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
        </View>
        <View style={styles.buttomContainer}>
          <Button
            mode='contained'
            style={{
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}
            onPress={() => signUp(email, password, name)}
          >
            Sign Up
          </Button>

          <Text
            style={{
              fontFamily: 'fira-sans-light',
              alignSelf: 'center',
              marginVertical: 50,
              color: 'gray',
            }}
          >
            ⎯⎯⎯⎯⎯⎯ Or Sign up with ⎯⎯⎯⎯⎯⎯
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
            <Button onPress={{}}>
              <Ionicons name='google' size={50} color='#DB4437' />
            </Button>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 70 }}>
          <Text style={{ color: 'gray', fontFamily: 'fira-sans-light' }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text
              style={{
                color: 'blue',
                fontFamily: 'fira-sans-light',
                marginLeft: 10,
              }}
            >
              Log in
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
