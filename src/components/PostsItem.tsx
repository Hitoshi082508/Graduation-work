import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../type';
type Props = {
  index: React.Key;
  post: Post;
}
export const PostsItem: React.FC<Props> = ({ index, post }) => {
  const [notVisible, setNotVisible] = useState(true);
  return (
    <TouchableOpacity key={index} onPress={() => setNotVisible(!notVisible)}>
      <View style={styles.postsContainer}>
        <View style={styles.textContainer}>
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
    backgroundColor: '#26ABFD',
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