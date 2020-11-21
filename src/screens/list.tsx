import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const ListScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>List!</Text>
          <Text>List!</Text>
          <Text>List!</Text>
          <Text>List!</Text>
          <Text>List!</Text>
          <Text>List!</Text>
        </ScrollView>
        <AddNewButton />
      </SafeAreaView>
    </>
  );
};

const AddNewButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPressIn={() => navigation.navigate('Modal')} style={styles.button}>
      <Ionicons name="add-circle" size={60} color="tomato" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    shadowRadius: 10,
    shadowColor: 'tomato',
    shadowOffset: { height: 10, width: 10 },
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
});
