import React, {useState,useRef} from 'react';
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
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";

const MainScreen = (props) => {
    const navigation = useNavigation();
    const [popup,setPopup] = useState(false);
    const refRBSheet = useRef();
    const getPopup = (popup) => {
        setPopup(popup);

        if(popup)
            refRBSheet.current.open();
    }

    return (
        <View style={[styles.container]}> 
            <SafeAreaView>
                <HeaderArea props={props} getPopup={getPopup} />
                <ScrollView style={[styles.scrollContainer]}>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("WishDetail")}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}>
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}>
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}>
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}> 
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.itemRow]}>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}> 
                                <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Yacht Small Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.item]}>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("WishDetail")}}>     
                                <Image source={require('../resource/sample/wish_sample2.jpeg')} style={[styles.itemImage]}/>
                                <Text style={[styles.itemTitle]}>Silver Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <RBSheet
                    ref={refRBSheet}
                    height={300}
                    openDuration={250}
                    customStyles={{
                        container: {
                        justifyContent: "center",
                        alignItems: "center"
                        }
                    }}
                    >
                    <View><Text>뇸뇸</Text></View>
                </RBSheet>
            </SafeAreaView>
        </View>
    )

}


const HeaderArea = ({getPopup}) => {
    const navigation = useNavigation();
    return(
        <View style={{flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("WishAdd")}}>
                    <Image source={require('../resource/common/addWish.png')} style={{width:20, height:20}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {getPopup(true)}}>
                    <Image source={require('../resource/common/setting_sliders.png')} style={{width:20, height:20, marginLeft:10}}/>
                </TouchableOpacity>
            </View>
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