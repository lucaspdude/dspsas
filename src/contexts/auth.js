import React, {createContext, useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    // '429226289791-kmhft2q32q11j3kl906ejc1u08a3vj7b.apps.googleusercontent.com',
    '429226289791-01u9j59eko1naus2o29dp4itifnpsce0.apps.googleusercontent.com',
});

const AuthContext = createContext({signed: true});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => {
      setUser(null);
    };
  }, []);

  async function SignInContext() {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log(error);
      }
    }
  }

  async function signOutContext() {
    return auth().signOut();
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        SignInContext,
        signOutContext,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
