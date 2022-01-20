import React from 'react'
import { StyleSheet, Image, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
type Props = {
  onChange: (v: string) => void;
  onClick: () => void;
  text: string;
}
export const Input: React.FC<Props> = ({ onChange, onClick, text }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => onChange(text)}
          value={text}
          style={styles.input}
          placeholder='Aa'
        />
        <TouchableOpacity onPress={onClick}>
          <Image style={styles.image} source={require('../../assets/submit.png')} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    textAlignVertical: 'top',
    width: '80%',
    backgroundColor: '#E5E5E5',
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 25,
    marginTop: 5,
    marginLeft: 10
  },
  image: {
    width: 50,
    height: 50,
    marginTop: -6,
    marginLeft: 8
  }
});