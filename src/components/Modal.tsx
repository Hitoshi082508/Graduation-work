import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import { SelectedImage } from './SelectedImage';
type Props = {
  open: boolean
  text: string
  setOpen: (v: boolean) => void
  setText: (v: string) => void
}
export const ModalBase: React.FC<Props> = ({ open, text, setOpen, setText }) => {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          {step === 1 ? (
            <>
              <View style={styles.textContainer}>
                <Text style={styles.text}>このメッセージに添える</Text>
                <Text style={styles.text}>お花を選んでください</Text>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {setSelectedImage('1'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('2'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('3'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('4'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('5'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('6'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('7'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('8'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('9'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('10'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('11'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setSelectedImage('12'); setStep(2);}}>
                  <Image style={styles.image} source={require('../../assets/image1.png')} />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <SelectedImage text={text} selectedImage={selectedImage} setOpen={setOpen} setText={setText} setStep={(step) => setStep(step)} />
          )}
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
      height: 5
    },
    backgroundColor: '#0D0D0D4D'
  },
  modalContainer: {
    width: '100%',
    height: 450,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 75
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    fontFamily: 'AppleSDGothicNeo-Light'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  image: {
    width: 85,
    height: 85,
    margin: 5
  }
});