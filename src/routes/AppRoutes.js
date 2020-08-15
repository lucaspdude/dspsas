import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '~/screens/AppScreens/Home';
import BottomNav from '~/components/BottomNav';
import Create from '~/screens/AppScreens/Create';
import Profile from '~/screens/AppScreens/Profile';
import Settings from '~/screens/AppScreens/Settings';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen
        name="Início"
        component={Home}
        selectedIcon="home"
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Lançamento"
        component={Create}
        selectedIcon="add"
        options={{
          tabBarIcon: 'plus-square',
        }}
      />
      <Tab.Screen
        name="Perfíl"
        component={Profile}
        selectedIcon="profile"
        options={{
          tabBarIcon: 'user',
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: 'menu',
        }}
      />
    </Tab.Navigator>
  );
}
