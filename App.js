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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './components/HomeScreen';

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
   	//네비게이션의 트리를 관리해주는 컴포넌트 
     <NavigationContainer> 
     {/* 네비게이션 기본틀의 스택을 생성 */} 
       <Stack.Navigator> 
         {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
           <Stack.Screen name="Home" component={HomeScreen}/> 
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
