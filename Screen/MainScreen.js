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
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import MainHeader from './Common/MainHeader';

const MainScreen = (props) => {
    const navigation = useNavigation();
    const [popup,setPopup] = useState(false);

    const selFilter = [{key : 'COLOR01', name : '버건디'}
                , {key : 'COLORO2', name : '레드'}
                , {key : 'COLORO3', name : '오렌지'}
                , {key : 'PRODUCT_STATE01', name : '구매완료'}
                , {key : 'BRAND01', name : '메종키츠네'}
                , {key : 'BRAND02', name : '디올'}
                , {key : 'BRAND03', name : '샤넬'}];

    const [presentFilterView,setPresentFilterView] = useState('COLOR');
    const [filterKey, setFilterKey] = useState(selFilter);
    const refRBSheet = useRef();

    const getPopup = (popup) => {
        setPopup(popup);

        if(popup)
            refRBSheet.current.open();
    }

    const onPressFilterMenu = (filterMenu) => {
        setPresentFilterView(filterMenu);
    }

    const onPressDelFilterBtn = (delFilterKey) => {
        setFilterKey(filterKey.filter(filterKey => filterKey.key !== delFilterKey));
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
                                onPress={()=>{onPressFilterMenu("COLOR")}}>
                                <Text style={[styles.filterHeaderTitle]}>색상</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={()=>{onPressFilterMenu("PRICE")}}>
                                <Text style={[styles.filterHeaderTitle]}>가격대</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={()=>{onPressFilterMenu("PRODUCT_STATE")}}>
                                <Text style={[styles.filterHeaderTitle]}>상품상태</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterHeaderBtn]}
                                onPress={()=>{onPressFilterMenu("BRAND")}}>
                                <Text style={[styles.filterHeaderTitle]}>브랜드</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={[styles.filterScrollView]}>
                            <View style={{display: presentFilterView == "COLOR" ? '' : 'none'}}>
                                <Text>색상 필터</Text>
                            </View>
                            <View style={{display: presentFilterView == "PRICE" ? '' : 'none'}}> 
                                <Text>가격대 필터</Text>
                            </View>
                            <View style={{display: presentFilterView == "PRODUCT_STATE" ? '' : 'none'}}>
                                <Text>상품상태 필터</Text>
                            </View>
                            <View style={{display: presentFilterView == "BRAND" ? '' : 'none'}}>
                                <Text>브랜드 필터</Text>
                            </View>
                        </ScrollView>
                        <View style={[styles.filterList]}>
                            <FlatList 
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={filterKey}
                                renderItem={({item}) => {
                                    console.log(item);
                                    return (
                                        <View style={[styles.filterBtn]}>
                                            <Text style={[styles.filterBtnFont]}>{item.name}
                                                <TouchableOpacity onPress={() => {onPressDelFilterBtn(item.key)}}>
                                                    <Text style={[styles.filterBtnFont]}> x</Text>
                                                </TouchableOpacity>
                                            </Text>
                                        </View>
                                    )
                                }}>
                            </FlatList>
                        </View>
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

    filterList: {
        borderWidth: 1
        , width: '100%'
        , height : 30
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
        , height: 45
        , width: 140
        , backgroundColor: 'black'
        , alignItems:'center'
        , justifyContent:'center'
    },

    filterCancleBtn: {
        height: 45
        , width: 140
        , backgroundColor: '#BDBDBD'
        , alignItems: 'center'
        , justifyContent: 'center'
    },

    filterBtn: {
        backgroundColor: 'black'
        ,borderRadius: 18
        , minWidth: 90
        , marginLeft : 7
        , justifyContent: 'center'
    },

    filterBtnFont: {
        fontSize: 17
        , color: 'white'
        , textAlign: 'center'
    }
  });

export default MainScreen;