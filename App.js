import React, { useSate } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';



export default function App() {
  return (
    <MealsNavigator />
  );
}

