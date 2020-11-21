import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './screens/main';
import { AddScreen } from './screens/add';

Ionicons.loadFont();
const RootStack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Modal" component={AddScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
