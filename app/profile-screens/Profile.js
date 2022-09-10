import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

// Navigation //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

//Screens//
import SavedTabs from './saved-screens/SavedTab';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { AuthContext } from '../Auth-screens/AuthContextProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

// storage //
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function Profile() {
  const colorScheme = useColorScheme();
  const { user } = useContext(AuthContext);
  const [status, setStatus] = useState('Edit Status...');
  const [profileImg, setProfileImg] = useState({ uri: user.photoURL });

  // Img Picker //
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Save to firebase storage //
      const fileName = result.uri.split('/').pop();
      const storageRef = ref(
        storage,
        `users/${user.email}/profileImg/${fileName}`
      );
      const img = await fetch(result.uri);
      const blob = await img.blob();
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Get task progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          this.setState({ isLoading: false });
          console.log(error);
        },
        () => {
          //  download img URL from firebase storage
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(auth.currentUser, { photoURL: downloadURL });
            setProfileImg({ uri: downloadURL });
          });
        }
      );
    }
  };

  // db //

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.titleContiner}>
        <Text
          style={[
            styles.titleStyle,
            {
              color: colorScheme === 'dark' ? 'white' : 'black',
            },
          ]}
        >
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('Edit Profile');
          }}
        >
          <Ionicons
            name='create-outline'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.imgContainer}>
        <TouchableOpacity style={styles.imgBtn} onPress={pickImage}>
          <Image source={profileImg} style={styles.profileImg} />
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.userName,
          {
            color: colorScheme === 'dark' ? 'white' : 'black',
          },
        ]}
      >
        {user.displayName}
      </Text>
      <Text style={styles.memberInfo}>{user.email}</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          Alert.prompt('Status', 'What are you thinking 💭 ', (newStatus) => {
            setStatus(newStatus);
          });
        }}
      >
        <Text
          style={[
            styles.status,
            {
              color: colorScheme === 'dark' ? 'white' : 'black',
              borderColor: colorScheme === 'dark' ? 'white' : 'black',
            },
          ]}
        >
          {status}
        </Text>
      </TouchableWithoutFeedback>

      <View style={styles.btnContainer}>
        <SavedTabs />
      </View>
    </View>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContiner: {
    flex: 0.13,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  profileImg: {
    alignSelf: 'center',
    borderRadius: 200,
    borderWidth: 3,
    width: 200,
    height: 200,
    borderColor: '#AC7088',
  },
  userName: {
    fontFamily: 'fira-sans-regular',
    fontSize: 35,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '2%',
  },
  memberInfo: {
    fontFamily: 'fira-sans-light',
    alignSelf: 'center',
    color: 'gray',
  },
  status: {
    borderColor: 'black',
    marginTop: '5%',
    fontFamily: 'fira-sans-regular',
    alignSelf: 'center',
    padding: '2.5%',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnContainer: {
    flex: 0.7,
    margin: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
