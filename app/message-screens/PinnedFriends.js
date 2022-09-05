import React from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';

// Users info //
import { Users } from '../users';

export default function PinnedFriends() {
  return (
    <FlatList
      numColumns='20'
      scrollEnabled={false}
      data={Users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={item.userImg} style={styles.profilePic} />
          <View style={styles.name}>
            <Text style={{ fontFamily: 'fira-sans-regular' }}>
              {item.userName}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

//// Style ////

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 80,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#F0ECE3',
  },
  profilePic: {
    flex: 1,
    top: 10,
    alignSelf: 'center',
    width: '62%',
    borderRadius: 50,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
