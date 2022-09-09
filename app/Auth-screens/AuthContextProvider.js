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
        // Log in //
        logIn: (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        },
        // Sign up //
        signUp: (email, password, name) => {
          createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // update user info
              updateProfile(auth.currentUser, {
                displayName: name,
              })
                .then(() => {
                  // Profile updated!
                  console.log(user.displayName);
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  console.log(errorMessage);
                });
            })
            .catch((error) => {
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        },
        // Sign out //
        signOut: () => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
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
