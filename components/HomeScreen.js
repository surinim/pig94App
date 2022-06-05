
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  
const HomeScreen = () => { 
	return ( 
    	<View style={styles.homeScreen}> 
        	<Text>HomeScreen</Text> 
        </View> 
    ) 
} 


const styles = StyleSheet.create({
    homeScreen: { 
      flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    } 
  });
  

export default HomeScreen;