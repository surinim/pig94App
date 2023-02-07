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

    const navigation = useNavigation();

    return(
        <View style={{flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{navigation.pop(1)}}>
                    <Image source={require('../../resource/common/backButton.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
                <Text style={{fontSize:17,flex:1,textAlign:'center'}}>{props.title}</Text>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../../resource/common/setting_sliders.png')} style={{width:20,height:20}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

export default MainHeader;