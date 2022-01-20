import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../type';
type Props = {
  index: React.Key;
  post: Post;
}
export const PostsItem: React.FC<Props> = ({ index, post }) => {
  const [notVisible, setNotVisible] = useState(true);

  const backgroundColor = () => {
    if(post.selectedImage === 1) {
      return '#cc1111';
    };
    if(post.selectedImage === 2) {
      return '#e05a00';
    };
    if(post.selectedImage === 3) {
      return '#bc9d19';
    };
    if(post.selectedImage === 4) {
      return '#5ea82d';
    };
    if(post.selectedImage === 5) {
      return '#157a00';
    };
    if(post.selectedImage === 6) {
      return '#2db2d6';
    };
    if(post.selectedImage === 7) {
      return '#2c44b7';
    };
    if(post.selectedImage === 8) {
      return '#c93176';
    };
    if(post.selectedImage === 9) {
      return '#600ea0';
    };
    if(post.selectedImage === 10) {
      return '#1b227f';
    };
    if(post.selectedImage === 11) {
      return '#000000';
    };
    if(post.selectedImage === 12) {
      return '#ffffff';
    };
  }

  return (
    <TouchableOpacity key={index} onPress={() => setNotVisible(!notVisible)}>
      <View style={styles.postsContainer}>
        <View style={[styles.textContainer, {backgroundColor: backgroundColor()}]}>
          <Text style={styles.text}>{post.text}</Text>
          {notVisible && (
            <View style={styles.notVisible}>
              <Text style={styles.notVisibleText}>Touch</Text>
            </View>
          )}
        </View>
        <Text style={styles.createdAt}>{post.created_at}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  postsContainer: {
    maxWidth: '80%',
    marginBottom: 20
  },
  textContainer: {
    borderRadius: 100,
    position: 'relative'
  },
  text: {
    fontSize: 17,
    color: '#fff',
    padding: 15,
    lineHeight: 20
  },
  createdAt: {
    marginTop: 5,
    marginLeft: 5,
    color: '#B5B5B5'
  },
  notVisible: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  notVisibleText: {
    fontSize: 15,
    color: '#B5B5B5'
  }
});