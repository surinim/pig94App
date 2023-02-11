/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import MainHeader from './Screen/Common/MainHeader';
import MainScreen from './Screen/MainScreen';
import BottomTab from './Screen/BottomTab';
import WishDetailScreen from './Screen/WishDetailScreen';
import WishAddScreen from './Screen/WishAddScreen';
import DetailItemScreen from './Screen/Item/DetailItemScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
     <NavigationContainer>
       <Stack.Navigator screenOptions = {{ headerShown: false }} initialRouteName={HomeScreen} >
          <Stack.Screen name="Home" component={HomeScreen} options={{title: '', headerStyle: { backgroundColor: '#fff', shadowOffset: {height: 0}, elevation: 0}}} /> 
          <Stack.Screen name="MainHeader" component={MainHeader} options={{title: '', headerStyle: { backgroundColor: '#fff', shadowOffset: {height: 0}, elevation: 0}}} />
          <Stack.Screen name="Bottom" component={BottomTab} options={{title: '', headerStyle: { backgroundColor: '#fff', shadowOffset: {height: 0}, elevation: 0}}} />
          <Stack.Screen name="WishDetail" component={WishDetailScreen} options={{title: '', headerStyle: { backgroundColor: '#fff', shadowOffset: {height: 0}, elevation: 0}}} /> 
          <Stack.Screen name="WishAdd" component={WishAddScreen} options={{title: '', headerStyle: { backgroundColor: '#fff', shadowOffset: {height: 0}, elevation: 0}}} />
       </Stack.Navigator>
     </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  homeScreen: { 
    flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  } 
});

export default App;
