import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, Text} from 'react-native';
import Routes from './routes';
import {AuthProvider} from './contexts/auth';

// import { Container } from './styles';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
