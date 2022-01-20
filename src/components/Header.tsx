import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
type Props = {
}
export const Header: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    width: 125,
    height: 40,
    marginBottom: 10
  }
});