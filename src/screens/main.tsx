import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ListScreen } from './list';
import { SettingsScreen } from './settings';

Ionicons.loadFont();
const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={getIconName(route.name)} size={size} color={color} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const getIconName = (location: string) => {
  switch (location) {
    case 'List':
      return 'list-outline';
    case 'Settings':
      return 'cog-outline';
    default:
      return 'ellipse-outline';
  }
};
