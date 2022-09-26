import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const FeedPost = ({ post }) => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <Pressable
        onPress={() => navigation.navigate('Profile', { id: post.postUserId })}
        style={styles.header}
      >
        <Image source={{ uri: post.User.image }} style={styles.profileImg} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Ionicons
          name='ios-ellipsis-horizontal'
          size={18}
          color='gray'
          style={styles.icon}
        />
      </Pressable>

      {/* Body */}

      <Text style={styles.description}>{post.description}</Text>

      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.btnsRow}>
          {/* Like button */}
          <View style={styles.btnIcon}>
            <Ionicons name='heart-outline' size={20} color='gray' />
          </View>

          {/* Comment button */}
          <View style={styles.btnIcon}>
            <Ionicons
              name='ios-chatbubble-ellipses-outline'
              size={20}
              color='gray'
            />
          </View>

          {/* Share button */}
          <View style={styles.btnIcon}>
            <Ionicons name='ios-arrow-redo-outline' size={20} color='gray' />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  post: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
  description: {
    paddingHorizontal: 25,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    aspectRatio: 1,
    marginTop: 10,
  },
  footer: {
    padding: 10,
  },

  likes: {
    color: 'gray',
  },
  shares: {
    marginLeft: 'auto',
    color: 'gray',
  },
  btnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.2,
    paddingVertical: 30,
    borderColor: 'lightgray',
  },
  btnIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
});
