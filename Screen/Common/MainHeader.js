import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MainHeader = (props) => {
    console.log(props);
    const navigation = useNavigation();



    return(
        <View style={{flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("WishAdd")}}>
                    <Image source={require('../../resource/common/addWish.png')} style={{width:20, height:20}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {props.getPopup(true)}}>
                    <Image source={require('../../resource/common/setting_sliders.png')} style={{width:20, height:20, marginLeft:10}}/>
                </TouchableOpacity>
            </View> 
        </View>
    )
    
}

export default MainHeader;