import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '~/screens/AuthScreens/SignIn';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
    </Tab.Navigator>
  );
}
