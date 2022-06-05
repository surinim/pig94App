import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';
import MainScreen from './MainScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator 
            initialRouteName='Main'
            // screenOptions={{
            //     tabBarActiveTintColor: 'tomato',
            //     tabBarInactiveTintColor: 'gray'
            // }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Main') {
                    iconName = focused ? 'ios-image' : 'ios-image-outline';
                  } else if (route.name === 'My') {
                    iconName = focused ? 'ios-happy' : 'ios-happy-outline';
                  }
      
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
            <Tab.Screen 
                name='Main' 
                component={MainScreen}  
                // options={
                //     tabBarIcon: ({ focused, horizontal, tintColor }) => (
                //         <Image source={require("../resource/common/menu_wishList.png")} style={[styles.menuIcon]} />
                //     )
                // }}
            />
            <Tab.Screen 
                name='My' 
                component={MainScreen} 
                // options={{ 
                //     tabBarIcon: ({ focused, horizontal, tintColor }) => (
                //         <Image source={require("../resource/common/menu_mypage.png")} style={[styles.menuIcon]} />
                //     )
                // }}
            />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    menuIcon: {
      width: 30,
      height: 30
    }
  });
  
  export default BottomTab;