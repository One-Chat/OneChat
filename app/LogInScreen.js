import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.introContainer}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'fira-sans-regular',
              padding: 20,
            }}
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
            //   value={}
            //   onChangeText={}
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
            //   value={}
            //   onChangeText={}
          />
          <TouchableWithoutFeedback>
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
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttomContainer}>
          <Button
            mode='contained'
            style={{
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}
            onPress={() => {
              alert('login');
            }}
          >
            Log In
          </Button>

          <Text
            style={{
              fontFamily: 'fira-sans-light',
              alignSelf: 'center',
              marginVertical: 50,
            }}
          >
            ⎯⎯⎯⎯⎯⎯⎯ Or Log in with ⎯⎯⎯⎯⎯⎯⎯
          </Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Button>
              <Ionicons name='github' size={50} color='black' />
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
          <TouchableWithoutFeedback>
            <Text
              style={{
                color: 'blue',
                fontFamily: 'fira-sans-light',
                marginLeft: 10,
              }}
            >
              Join Now
            </Text>
          </TouchableWithoutFeedback>
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
});
