import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

// Theme //
import { useColorScheme } from 'react-native';

// Auth //
import { auth } from '../../firebase';

export default function CreatePost({ navigation }) {
  const colorScheme = useColorScheme();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const currentUser = auth.currentUser;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onPost = () => {
    console.log(description);
    setDescription('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.titleContainer}>
          <Text
            style={[
              styles.titleStyle,
              {
                color: colorScheme === 'dark' ? 'white' : 'black',
              },
            ]}
          >
            Post
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Community');
            }}
          >
            <Icons
              name='close'
              size={25}
              style={{ right: 20 }}
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.mainContainer, { marginBottom: 0 }]}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={10}
        >
          <View style={styles.header}>
            <Image
              source={{ uri: currentUser.photoURL }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{currentUser.displayName}</Text>
            <Icons
              onPress={pickImage}
              name='perm-media'
              size={24}
              color='#00a2ff'
              style={styles.icon}
            />
          </View>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="What's on your mind?"
            multiline
            style={{ marginHorizontal: 30 }}
          />

          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.btnContainer}>
            <Button onPress={onPost} disabled={!description} color='white'>
              Post{' '}
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

//// Styles ////

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.07,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: 'lightgray',
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
  header: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
    fontFamily: 'fira-sans-regular',
  },
  icon: {
    marginLeft: 'auto',
  },
  input: {
    marginBottom: 'auto',
  },
  btnContainer: {
    backgroundColor: '#00a2ff',
    width: '70%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
