import React, {useContext} from 'react';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import AuthContext from '~/contexts/auth';
import {AppContainer} from '~/styles/DefaultStyles';
import {Container} from '~/styles/DefaultStyles';
import {Content} from '~/styles/DefaultStyles';

const Routes = () => {
  const {signed} = useContext(AuthContext);

  return <AppContainer>{signed ? <AppRoutes /> : <AuthRoutes />}</AppContainer>;
};

export default Routes;
