import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/AntDesign';

// Theme //
import { useColorScheme } from 'react-native';

export default function Community({ navigation }) {
  const colorScheme = useColorScheme();
  const [description, setDescription] = useState('');
  // const insets = useSafeAreaInsets();
  const [image, setImage] = useState(null);

  const onPost = () => {
    console.log(description);
    setDescription('');
  };

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

  return (
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
          Community
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreatePost');
          }}
        >
          <Icons
            name='edit'
            size={25}
            style={{ right: 20 }}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontFamily: 'fira-sans-bold' }}>
          Coming Soon ... 🤔{' '}
        </Text>
      </View>
    </View>
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
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
