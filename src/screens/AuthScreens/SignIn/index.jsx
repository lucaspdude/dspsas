import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '~/contexts/auth';
// import { Container } from './styles';

const SignIn = () => {
  const {SignInContext} = useContext(AuthContext);
  const handleSignIn = async () => {
    await SignInContext();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Sign In</Text>
      <Button title="Google SignIn" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
