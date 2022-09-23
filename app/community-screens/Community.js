import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/AntDesign';
import FeedPost from './FeedPost';

// data //
import posts from '../../posts.json';

// Theme //
import { useColorScheme } from 'react-native';

export default function Community({ navigation }) {
  const colorScheme = useColorScheme();

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <FeedPost post={item} />}
        />
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
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 22,
    fontFamily: 'fira-sans-regular',
  },
});
