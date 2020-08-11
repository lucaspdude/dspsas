import React from 'react';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
  const signed = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
