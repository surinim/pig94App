import React, {useState,useRef} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button
  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import MainHeader from './Common/MainHeader';

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
                <MainHeader props={props} getPopup={getPopup}/>
                {/* <HeaderArea props={props} getPopup={getPopup} /> */}
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
                    height={500}
                    openDuration={250}
                    customStyles={{
                        container: {
                        justifyContent: "center",
                        alignItems: "center"
                        }
                    }}
                    >
                    <View style={[styles.filterContainer]}>
                        <View style={[styles.filterHeader]}>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={(props)=>alert("색상")}>
                                <Text style={[styles.filterHeaderTitle]}>색상</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={(props)=>alert("가격대")}>
                                <Text style={[styles.filterHeaderTitle]}>가격대</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={(props)=>alert("상품상태")}>
                                <Text style={[styles.filterHeaderTitle]}>상품상태</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={(props)=>alert("브랜드")}>
                                <Text style={[styles.filterHeaderTitle]}>브랜드</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={[styles.filterScrollView]}>
                        </ScrollView>
                        <View style={[styles.filterBottom]}>
                            <TouchableOpacity style={[styles.filterApplyBtn]}>
                                <View>
                                    <Text style={{color:'#fff',fontSize:15}}>적용</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.filterCancleBtn]}
                                onPress={()=>{alert("필터 안해앵")}}>
                                <View>
                                    <Text style={{color:'#fff',fontSize:15}}>초기화</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
            </SafeAreaView>
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
    },


    /** 필터 영역 */

    filterContainer: {
        width: '100%'
        , height: '100%'
        , alignItems: 'center'
        , paddingHorizontal: 10
        , paddingVertical: 30
    },

    filterHeader: {
        width: '100%'
        , height: 40
        , flexDirection: 'row'
    },

    filterHeaderBtn: {
        flex: 1
        , marginRight: 10
    },  

    filterHeaderTitle: {
        fontSize: 23
        , fontWeight: '500'
        , color: '#5F5F5F'
    },

    filterScrollView: {        
        borderWidth: 1
        , borderColor: '#FF0000'
        , width: '100%'
        , marginTop: 0
    },

    filterBottom: {
        width: '100%'
        , height: 50
        , alignContent :'flex-end'
        , flexDirection:'row'
        , alignItems: 'center'
        , justifyContent:'center'
    },

    filterApplyBtn: {
        marginRight: 50
        ,height: 45
        ,width: 140
        ,backgroundColor: 'black'
        ,alignItems:'center'
        ,justifyContent:'center'
    },

    filterCancleBtn: {
        height: 45
        ,width: 140
        ,backgroundColor: '#BDBDBD'
        ,alignItems: 'center'
        ,justifyContent: 'center'
    }
  });

export default MainScreen;