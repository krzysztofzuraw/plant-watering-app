import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Hello world</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};
