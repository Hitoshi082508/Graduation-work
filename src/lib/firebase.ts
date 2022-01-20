import firebase from 'firebase/app';
import 'firebase/firestore';
import Constants from 'expo-constants';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest?.extra?.firebase);
}

export const db = firebase.firestore();
