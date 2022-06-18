import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Pressable
  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//selectbox module
import SelectDropdown from 'react-native-select-dropdown'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'
const WishAddScreen = (props) => {
    const navigation = useNavigation();
    const [categoryChangeColor,setCategoryChangeColor] = useState();
    const [productNameChangeColor,setProductNameChangeColor] = useState();
    const [brandNameChangeColor,setBrandNameChangeColor] = useState();
    const [priceChangeColor,setPriceChangeColor] = useState();
    const [linkChangeColor,setLinkChangeColor] = useState();
    const [image,setImage] = useState();

    const category = ["옷", "신발", "가방", "악세서리", "대뽕"];

    

    // const changeProfileImage = () => {
    //     console.log("!!!");
    //     console.log(PERMISSIONS.IOS.PHOTO_LIBRARY);
    //     check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
    //         // switch(result) {
    //             console.log(result);
    //             // case RESULTS.BLOCKED:
    //                 // toast.show('앨범 권한이 필요합니다.');
    //                 // break;
    //         // }
    //     }).catch(err=>{

    //     });
    // }

    const pickImage = async () => {

        const  result  =  await  launchImageLibrary ({
            maxWidth:200,
            maxHeight:200,
            mediaType:'photo',
            quality : 1,
        }) ;

        console.log(result);
    }

    return (
        <SafeAreaView>
            <HeaderArea/>
            <ScrollView style={[styles.scrollContainer]}>
                <View style={{flexDirection:'column',marginTop:24}}>
                    <Text style={[styles.inputTitle]}>카테고리 셀렉트박스로 변경예정</Text>
                    <SelectDropdown
                        data={category}
                        buttonStyle={{width:'100%', height: 40, borderWidth:1, borderColor:categoryChangeColor == null?'#D8D8D8':categoryChangeColor, paddingHorizontal: 10}}
                        buttonTextStyle={{fontSize: 15}}
                        defaultButtonText={"카테고리를 선택하세요."}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        onFocus={()=>{setCategoryChangeColor('#F7819F')}} 
                        onBlur={()=>{setCategoryChangeColor('#D8D8D8')}}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />
                    {/* <TextInput style={[styles.textInput,{borderColor:categoryChangeColor == null?'#D8D8D8':categoryChangeColor}]} onFocus={()=>{setCategoryChangeColor("#F7819F");}} onBlur={()=>{setCategoryChangeColor("#D8D8D8")}}></TextInput> */}
                </View>

                <View style={{flexDirection:'column',marginTop:24}}>
                    <Text style={[styles.inputTitle]}>제품명</Text>
                    <TextInput style={[styles.textInput,{borderColor:productNameChangeColor == null?'#D8D8D8':productNameChangeColor}]} onFocus={()=>{setProductNameChangeColor("#F7819F")}} onBlur={()=>{setProductNameChangeColor("#D8D8D8")}}></TextInput>
                </View>

                <View style={{flexDirection:'column',marginTop:24}}>
                    <Text style={[styles.inputTitle]}>브랜드명</Text>
                    <TextInput style={[styles.textInput,{borderColor:brandNameChangeColor == null?'#D8D8D8':brandNameChangeColor}]} onFocus={()=>{setBrandNameChangeColor("#F7819F")}} onBlur={()=>{setBrandNameChangeColor("#D8D8D8")}}></TextInput>
                </View>

                <View style={{flexDirection:'column',marginTop:24}}>
                    <Text style={[styles.inputTitle]}>가격</Text>
                    <TextInput style={[styles.textInput,{borderColor:priceChangeColor == null?'#D8D8D8':priceChangeColor}]} onFocus={()=>{setPriceChangeColor("#F7819F")}} onBlur={()=>{setPriceChangeColor("#D8D8D8")}}></TextInput>
                </View>

                <View style={{flexDirection:'column',marginTop:24}}>
                    <Text style={[styles.inputTitle]}>링크</Text>
                    <TextInput style={[styles.textInput,{borderColor:linkChangeColor == null?'#D8D8D8':linkChangeColor}]} onFocus={()=>{setLinkChangeColor("#F7819F")}} onBlur={()=>{setLinkChangeColor("#D8D8D8")}}></TextInput>
                </View>

                <View style={{marginTop:50}}>
                    <TouchableOpacity onPress={()=>{pickImage()}}>
                        <View>
                            <Text> + (이미지추가)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection:'row',position:'absolute',bottom:-130,width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{marginRight:50,height:45,width:140,backgroundColor:'#F7819F',alignItems:'center',justifyContent:'center'}}>
                        <View>
                            <Text style={{color:'#fff',fontSize:15}}>등록</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{height:45,width:140,backgroundColor:'#BDBDBD',alignItems:'center',justifyContent:'center'}}
                        onPress={()=>{navigation.pop()}}>
                        <View>
                            <Text style={{color:'#fff',fontSize:15}}>취소</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const HeaderArea = () => {
    const navigation = useNavigation();
    
    return(
        <View style={{flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text>PIG94</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        height: '100%',
        paddingHorizontal:20,
        paddingVertical:20,
    },

    itemImageView: {
      height: 400
    },

    itemInfoView: {
      height: 200,
      padding: 10
    },

    itemBrandNameView: {
      borderWidth: 1,
      borderColor: '#FF0000',
      height: 30,
      justifyContent: 'center'
    },

    itemTitleView: {
      borderWidth: 1,
      borderColor: '#FF0000',
      height: 60,
      fontSize: 40,
      justifyContent: 'center'
    },

    itemImage: {
      width: '100%',
      height: '100%'
    },

    itemBrandName: {
      color: '#6E6E6E',
      marginBottom: 8
    },

    itemTitle: {
      fontSize: 18,
      marginBottom: 8
    },

    itemPrice: {
      fontSize: 18,
      marginBottom: 8
    },

    itemLink: {
      marginBottom: 8
    },

    progressBarView: {
      alignItems: 'center'
    },

    inputTitle : {
        marginBottom: 5
    },

    textInput : {
        width:'100%',
        height: 40,
        borderWidth:1,
        // borderColor:'#D8D8D8',
        paddingHorizontal: 10
    }
  });

export default WishAddScreen;