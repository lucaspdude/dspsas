import React, {useContext, useRef} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AuthContext from '~/contexts/auth';
import DefaultInput from '~/components/Inputs/DefaultInput';
import {Form} from '@unform/mobile';
import {AppContainer} from '~/styles/DefaultStyles';
import {Container} from '~/styles/DefaultStyles';
import {Content} from '~/styles/DefaultStyles';

// import { Container } from './styles';

const Home = () => {
  const {user, signOutContext} = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSignOut = async () => {
    await signOutContext();
  };
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

export default Home;
