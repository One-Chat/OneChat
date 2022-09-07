import React, { createContext, useState } from 'react';

// Auth //
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logIn: (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        },
        signUp: (email, password, name) => {
          createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              updateProfile(auth.currentUser, { displayName: name });
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        },
        signOut: () => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((e) => {
              console.log(e);
            });
        },
        userInfo: () => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              const name = user.name;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
