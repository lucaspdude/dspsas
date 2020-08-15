import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '~/contexts/auth';
import {AppContainer, Container} from '~/styles/DefaultStyles';
import {Row} from '~/styles/DefaultStyles';
import {PageTitle} from '~/styles/DefaultStyles';
import {ProfilePicture} from '~/styles/DefaultStyles';

import {UserName} from '~/styles/DefaultStyles';
import {InputLabel} from '~/styles/DefaultStyles';
import {InputItem} from '~/styles/DefaultStyles';
import {InputWrapper} from '~/styles/DefaultStyles';
import {Content} from '~/styles/DefaultStyles';
// import { Container } from './styles';

const Profile = () => {
  const {userData, signOutContext} = useContext(AuthContext);
  console.log(userData);
  const handleSignOut = async () => {
    await signOutContext();
  };
  return (
    <Container>
      <Content>
        <Row>
          <UserName>{userData.displayName}</UserName>
          <ProfilePicture source={{uri: userData.photoURL}} />
        </Row>

        <Row>
          <InputWrapper
            style={{
              borderBottomColor: '#a28fba',
              borderBottomWidth: 2,
            }}>
            <InputLabel>Nome</InputLabel>
            <InputItem
              type="text"
              name="nome"
              id="nome"
              placeHolder=""
              value={userData.displayName}
            />
          </InputWrapper>
        </Row>

        <Row>
          <InputLabel>Nome</InputLabel>
          <InputItem
            type="text"
            name="nome"
            id="nome"
            placeHolder=""
            value={userData.displayName}
          />
          <InputLabel>Nome</InputLabel>
          <InputItem
            type="text"
            name="nome"
            id="nome"
            placeHolder=""
            value={userData.displayName}
          />
        </Row>
      </Content>
    </Container>
  );
};

export default Profile;
