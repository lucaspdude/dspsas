import React, {createContext, useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    // '429226289791-kmhft2q32q11j3kl906ejc1u08a3vj7b.apps.googleusercontent.com',
    '429226289791-01u9j59eko1naus2o29dp4itifnpsce0.apps.googleusercontent.com',
});

const AuthContext = createContext({signed: true});

const getUserProfileData = async (user) => {
  await firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      setUserData(documentSnapshot.data());
    })
    .catch((error) => {
      console.log(error);
    });
};
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore().collection('users').doc(userAuth.uid);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email, photoURL} = userAuth;
    const createdAt = new Date();
    const identifier = displayName.replace(/\s/g, '.');
    try {
      const response = await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        identifier,
      });
      return response.data();
    } catch (error) {
      console.log(error);
    }
  }
  return snapShot.data();
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      createUserProfileDocument(currentUser);
    });
    return () => {
      setUser(null);
    };
  }, []);

  useEffect(() => {
    if (user) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          setUserData(documentSnapshot.data());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

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
        userData,
        SignInContext,
        signOutContext,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
