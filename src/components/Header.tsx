import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
}
export const Header: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Huruhuru</Text>
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
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    letterSpacing: 1
  }
});