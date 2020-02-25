import { default as React, useState, useEffect } from 'react';
import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';

import { FirestoreContext } from './FirestoreContext';

export const FirestoreProvider = (props) => {
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const [usersPerPage, setCurrentUsersPerPage] = useState(10);

  const getUsers = async (startAt, itemsPerPage) => {
    const db = firebase.firestore();
    const query = db.collection('users').limit(itemsPerPage);
    const snapshot = await query.get();
    const users = snapshot.docs.map((doc) => {
      return {uid: doc.id, ...doc.data()};
    });
    return users;
  }

  const addUser = async () => {
    const db = firebase.firestore();
    const userRef = await db.collection('users').add({
      fullname: this.state.fullname,
      email: this.state.email,
      ...generateTimestampsDuringCreate(),
    }); 

    return userRef;
  }

  const updateUser = () => {

  }

  const deleteUser = () => {

  }

  const likeUser = async (userId, friendId) => {
    return matchUser(userId, friendId, 1);
  }

  const superlikeUser = async (userId, friendId) => {
    return matchUser(userId, friendId, 2);
  }

  const dislikeUser = async (userId, friendId) => {
    return matchUser(userId, friendId, -1);
  }

  const neutralUser = async (userId, friendId) => {
    return matchUser(userId, friendId, 0);
  }

  const reNeutralUser = async (matchId) => {
    const db = firebase.firestore();
    const matchRef = await db.collection('matches').doc(matchId);
    const setWithMerge = await matchRef.set({
      status: 0,
      _updatedAt: Date.now()
    }, { merge: true });

    return setWithMerge;
  }

  const matchUser = async (userId, friendId, status = 0) => {
    const db = firebase.firestore();
    const matchRef = await db.collection('matches').add({
      userId: userId,
      friendId: friendId,
      status: status,
      ...generateTimestampsDuringCreate(),
    }); 

    return matchRef;
  }

  const generateTimestampsDuringCreate = () => {
    return {
      _createdAt: Date.now(),
      _updatedAt: null,
      _deletedAt: null
    }
  }

  return (
    <FirestoreContext.Provider value={{ dislikeUser, getUsers, likeUser, neutralUser, reNeutralUser, superlikeUser }}>
      {props.children}
    </FirestoreContext.Provider>
  )
};