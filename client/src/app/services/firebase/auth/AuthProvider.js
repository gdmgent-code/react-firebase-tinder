import { default as React, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthContext } from './AuthContext';

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    // Listen for auth changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // Unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, [currentUser]);

  const createUserWithEmailAndPassword = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  const loginUserWithEmailAndPassword = async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  const resetPassword = async (email) => {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  const changePassword = async (password) => {
    return firebase.auth().currentUser.updatePassword(password);
  }

  const logout = async () => {
    return firebase.auth().signOut();
  }

  return (
    <AuthContext.Provider value={{ currentUser, loginUserWithEmailAndPassword, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
};