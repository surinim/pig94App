import React,{useRef,useState} from 'react';
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
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import MainHeader from './Common/MainHeader';
import Toast from 'react-native-easy-toast';

const MainScreen = (props) => {

    const navigation = useNavigation();


    return (
        <View style={[styles.container]}> 
            <SafeAreaView>
                <MainHeader title={"메인"}/>
                <ScrollView style={[styles.scrollContainer]}>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:1})}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:2})}}>
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:3})}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:4})}}>
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:1})}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:1})}}> 
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("DetailItemScreen",{seq:1})}}> 
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{toast.show("정지뽕꼬리");}}>     
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Toast
                ref={(ref)=>{toast=ref;}}
                style={{ backgroundColor: '#131313',width:'90%',height:50,borderRadius:27,justifyContent:'center',alignItems:'center'}}
                position='top'
                positionValue={120}
                fadeInDuration={1000}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{ color: '#fff',fontSize:15,opacity:1 }}
              />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        height: '100%'
    },

    itemRow: {
        flexDirection: 'row'
        , marginBottom: 20
    },

    item: {
        flex: 1
        , height: 300
        , paddingHorizontal: 3
        , paddingVertical: 3
    },

    itemImage: {
        width: '100%'
        , height: 270
    },

    itemTitle: {
        paddingHorizontal: 3
        , marginTop: 8
        , color: '#5F5F5F'
    }
  });

export default MainScreen;