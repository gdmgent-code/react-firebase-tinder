import { default as React, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';

import { firebaseConfig } from '../../configs';

import { AuthContext, AuthProvider, useAuth } from './auth';
import { FirestoreContext, FirestoreProvider, useFirestore } from './firestore';

const FirebaseContext = React.createContext(null);

const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  const [ app ] = useState(firebase.initializeApp(firebaseConfig));

  useEffect(() => {
    // console.log(app);
  }, [app]);

  return (
    <FirebaseContext.Provider value={{ app }}>
      {props.children}
    </FirebaseContext.Provider>
  )
};

export {
  AuthContext,
  AuthProvider,
  FirebaseContext,
  FirebaseProvider,
  FirestoreContext,
  FirestoreProvider,
  useAuth,
  useFirebase,
  useFirestore
}