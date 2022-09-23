import React, { createContext, useState } from 'react';

// Auth //
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

// db //
import { db } from '../../firebase';
import { setDoc, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // Log in //
        logIn: (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              updateDoc(doc(db, 'users', user.uid), {
                isOnline: true,
              });
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log(errorMessage);
              Alert.alert('Opps!', 'Email or password is incorrect.');
            });
        },
        // Sign up //
        signUp: (email, password, name) => {
          createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // update user info &  storing to db
              setDoc(doc(db, 'users', user.uid), {
                displayName: name,
                Email: email,
                uid: user.uid,
                photoURL:
                  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
              });
              updateProfile(auth.currentUser, {
                displayName: name,
              })
                .then(() => {
                  console.log(user.email);
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  console.log(errorMessage);
                });
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log(errorMessage);
              if (errorMessage === 'Firebase: Error (auth/invalid-email).')
                Alert.alert('Opps!', 'Please enter a valid email address');
              else if (
                errorMessage ===
                'Firebase: Password should be at least 6 characters (auth/weak-password).'
              )
                Alert.alert(
                  'Opps!',
                  'Password should be at least 6 characters'
                );
              else if (
                errorMessage === 'Firebase: Error (auth/email-already-in-use).'
              )
                Alert.alert('Opps!', 'Email has already been registered.');
            });
        },
        // Sign out //
        signOut: () => {
          signOut(auth)
            .then(() => {
              updateDoc(doc(db, 'users', user.uid), {
                isOnline: false,
              });
            })
            .catch((e) => {
              console.log(e);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
