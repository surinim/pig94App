import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions
  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import MainHeader from '../Common/MainHeader';

const WINDOW_WIDTH = Dimensions.get('window').width;
const DetailItemScreen = (props) => {
    //상품 시퀀스 props 출력
    const itemSeq = props.route.params.seq;
    return (
            <SafeAreaView>
                <MainHeader title={itemSeq+"번 상품 상세화면"}/>
                <ScrollView
                    horizontal
                    pagingEnabled
                    decelerationRate={'normal'}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{paddingHorizontal:30,width:WINDOW_WIDTH,paddingVertical:30}}>
                        <View style={{borderWidth:1}}>
                            <Image style={{height:300,width:300}} source={require('../../resource/sample/wish_sample.jpeg')}/>
                        </View>
                        <View style={{alignItems:'center',marginTop:30}}>
                            <Text>이름이름이름이름이름이름</Text>
                            <Text>내용내용내용내용내용내용내용내용</Text>
                            <Text>가격가격</Text>
                            <Text>날짜날짜날짜~날짜날짜날짜날짜</Text>
                            <Text>이름이름이름이름이름이름</Text>
                            <Text>이름이름이름이름이름이름</Text>
                            <Text>이름이름이름이름이름이름</Text>
                            <Text>이름이름이름이름이름이름</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center'}}>
                            <TouchableOpacity
                                    onPress={()=>{console.log('버튼영역')}}
                                    style={{width:150,borderWidth:2}}>
                            <Text>asd</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                    onPress={()=>{console.log('버튼영역2')}}
                                    style={{width:150,borderWidth:2}}>
                            <Text>asd</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
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

export default DetailItemScreen;