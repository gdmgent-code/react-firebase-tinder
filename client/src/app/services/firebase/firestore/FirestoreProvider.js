import { default as React, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { FirestoreContext } from './FirestoreContext';

export const FirestoreProvider = (props) => {
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const [usersPerPage, setCurrentUsersPerPage] = useState(10);

  const getUsers = () => {

  }

  const addUser = () => {

  }

  const updateUser = () => {

  }

  const deleteUser = () => {

  }

  const likeUser = (userId, friendsId) => {

  }

  const dislikeUser = (userId, friendsId) => {

  }

  return (
    <FirestoreContext.Provider value={{ }}>
      {props.children}
    </FirestoreContext.Provider>
  )
};