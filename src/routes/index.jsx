import React, {useContext} from 'react';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import AuthContext from '~/contexts/auth';

const Routes = () => {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
