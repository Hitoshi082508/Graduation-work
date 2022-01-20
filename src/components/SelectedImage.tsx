import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import { db } from '../lib/firebase';
import { format } from 'date-fns';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
type Props = {
  text: string
  selectedImage: number | undefined
  setOpen: (v: boolean) => void
  setText: (v: string) => void
  setStep: (v: number) => void
}
export const SelectedImage: React.FC<Props> = ({ text, selectedImage, setOpen, setText, setStep }) => {
  const [subscription, setSubscription] = useState(null);
  const [ok, setOk] = useState(true);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const top = useSharedValue(200);
  const opacity = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      top: top.value
    };
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

  const submit = async () => {
    setOk(false);
    await db.collection('posts').doc().set({
      text: text,
      created_at: format(new Date(), 'MM/dd HH:mm'),
      selectedImage: selectedImage
    });
    opacity.value = withTiming(0, { duration: 4500 });
    top.value = withTiming(-250, {duration: 5000});
    setOk(true);
  }

  const init = () => {
    setOpen(false);
    setText('');
    setStep(1);
  }

  if (ok) {
    if (round(x) > 0.80) {
      submit();
      setTimeout(init, 4700);
    }
  }

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>こちらのお花でメッセージを</Text>
        <Text style={styles.text}>送信いたします</Text>
        <Text style={styles.text}>スマートフォンを上下に振ってください</Text>
      </View>
      <Animated.View style={[styles.imageContainer, style]}>
        {selectedImage === 1 && (
          <Image style={styles.image} source={require('../../assets/cc1111.png')} />
        )}
        {selectedImage === 2 && (
          <Image style={styles.image} source={require('../../assets/e05a00.png')} />
        )}
        {selectedImage === 3 && (
          <Image style={styles.image} source={require('../../assets/bc9d19.png')} />
        )}
        {selectedImage === 4 && (
          <Image style={styles.image} source={require('../../assets/5ea82d.png')} />
        )}
        {selectedImage === 5 && (
          <Image style={styles.image} source={require('../../assets/157a00.png')} />
        )}
        {selectedImage === 6 && (
          <Image style={styles.image} source={require('../../assets/2db2d6.png')} />
        )}
        {selectedImage === 7 && (
          <Image style={styles.image} source={require('../../assets/2c44b7.png')} />
        )}
        {selectedImage === 8 && (
          <Image style={styles.image} source={require('../../assets/c93176.png')} />
        )}
        {selectedImage === 9 && (
          <Image style={styles.image} source={require('../../assets/600ea0.png')} />
        )}
        {selectedImage === 10 && (
          <Image style={styles.image} source={require('../../assets/1b227f.png')} />
        )}
        {selectedImage === 11 && (
          <Image style={styles.image} source={require('../../assets/000000.png')} />
        )}
        {selectedImage === 12 && (
          <Image style={styles.image} source={require('../../assets/ffffff.png')} />
        )}
      </Animated.View>
    </>
  )
}
const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30
  },
  text: {
    fontSize: 18,
    fontFamily: 'AppleSDGothicNeo-Light'
  },
  imageContainer: {
    position: 'absolute',
    marginLeft: '32%',
    marginRight: '32%',
  },
  image: {
    width: 150,
    height: 150,
  }
});