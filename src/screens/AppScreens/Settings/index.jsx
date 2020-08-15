import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '~/contexts/auth';

// import { Container } from './styles';

const Settings = () => {
  const {user, signOutContext} = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOutContext();
  };
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Button title="SignOut" onPress={handleSignOut} />
    </View>
  );
};

export default Settings;
