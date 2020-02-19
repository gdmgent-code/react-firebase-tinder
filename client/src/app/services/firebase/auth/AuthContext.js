import { default as React, useContext } from 'react';

export const AuthContext = React.createContext(null);
export const useAuth = () => useContext(AuthContext);