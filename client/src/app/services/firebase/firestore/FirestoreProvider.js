import { default as React, useState, useEffect } from 'react';
import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';

import { FirestoreContext } from './FirestoreContext';

export const FirestoreProvider = (props) => {
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const [usersPerPage, setCurrentUsersPerPage] = useState(10);

  const getUsers = async (startAt, itemsPerPage) => {
    const query = firestore.collection('users').startAt(startAt).limit(itemsPerPage);
    const snapshot = await query.get();
    const items = snapshot.docs.map((doc) => {
      return doc.data();
    });
    return items;
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
    <FirestoreContext.Provider value={{ getUsers }}>
      {props.children}
    </FirestoreContext.Provider>
  )
};