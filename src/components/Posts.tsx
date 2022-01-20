import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../type'
import { PostsItem } from './PostsItem'
type Props = {
  posts: Post[]
}
export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <View style={styles.container}>
      {posts?.map((post, index) => {
        return (
          <PostsItem post={post} index={index} />
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30
  },
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