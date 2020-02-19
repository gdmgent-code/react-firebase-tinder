import { default as React, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { FirestoreContext } from './FirestoreContext';

export const FirestoreProvider = (props) => {
  const addUser = () => {

  }

  const updateUser = () => {

  }

  const deleteUser = () => {

  }

  const likeUser = () => {

  }

  const dislikeUser = () => {

  }

  return (
    <FirestoreContext.Provider value={{ }}>
      {props.children}
    </FirestoreContext.Provider>
  )
};