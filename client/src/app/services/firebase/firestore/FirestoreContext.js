import { default as React, useContext } from 'react';

export const FirestoreContext = React.createContext(null);
export const useFirestore = () => useContext(FirestoreContext);