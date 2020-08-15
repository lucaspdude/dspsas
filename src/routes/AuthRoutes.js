import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '~/screens/AuthScreens/SignIn';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarVisible={false}>
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
