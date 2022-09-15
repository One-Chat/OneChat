// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADCB6YndUCpHLdM0mcmD4GWIzyvsl_u9M',
  authDomain: 'one-chat-b6223.firebaseapp.com',
  projectId: 'one-chat-b6223',
  storageBucket: 'one-chat-b6223.appspot.com',
  messagingSenderId: '230019006655',
  appId: '1:230019006655:web:7575d89dbe6650fcb2860a',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Cloud Firestore
const db = getFirestore(app);

// Initialize Cloud Storage
const storage = getStorage(app);

export { auth, db, storage };
