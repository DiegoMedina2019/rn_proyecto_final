import React, { useState } from 'react';
import { setTokenAuthentication } from '../services/api';
import LocalStorage from '../services/localStorage';
//import t from '../services/translate';

const auth = {
  user: undefined,
  isLoggedIn: false,
  token: '',
};

export const AuthContext = React.createContext(auth);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(auth);

  const login = ({ user, token }) => {
    setUser({
      user,
      isLoggedIn: true,
      token,
    });
   // setTokenAuthentication(token); //falta este metodo
    LocalStorage.setItem('token', token);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};