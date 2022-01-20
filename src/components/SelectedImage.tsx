import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import { db } from '../lib/firebase';
import { format } from 'date-fns';
type Props = {
  text: string
  selectedImage: string
  setOpen: (v: boolean) => void
  setText: (v: string) => void
  setStep: (v: number) => void
}
export const SelectedImage: React.FC<Props> = ({ text, selectedImage, setOpen, setText, setStep }) => {
  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;

  const round = (n: number) => {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
  }

  const submit = () => {
    db.collection('posts').doc().set({
      text: text,
      created_at: format(new Date(), 'MM/dd HH:mm'),
      selectedImage: selectedImage
    });
  }

  if (round(x) > 0.70) {
    submit();
    setOpen(false);
    setText('');
    setStep(1);
  }

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>こちらのお花でメッセージを</Text>
        <Text style={styles.text}>送信いたします</Text>
        <Text style={styles.text}>スマートフォンを上下に振ってください</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/image1.png')} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  image: {
    width: 150,
    height: 150,
  }
});