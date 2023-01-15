import React, { useState } from 'react';
import { setTokenAuthentication } from '../services/api';
import LocalStorage from '../services/localStorage';
//import t from '../services/translate';

const auth = {
  user: undefined,
  isLoggedIn: false,
  token: '',
  task:{}
};

export const AuthContext = React.createContext(auth);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(auth);
  const [backPressed, setBackPressed] = useState(false);//maneja evento cuando aprieto el btn volver de alguna vista

  const login = ({ user, token }) => {
    setUser({
      ...auth,
      user,
      isLoggedIn: true,
      token,
    });
   // setTokenAuthentication(token); //falta este metodo
    LocalStorage.setItem('token', token);
  };

  return (
    <AuthContext.Provider value={{ user, login ,setUser,backPressed, setBackPressed}}>
      {children}
    </AuthContext.Provider>
  );
};