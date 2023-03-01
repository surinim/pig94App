import React, {useState,useRef,useMemo} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    Dimensions,
  } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import MainHeader from './Common/MainHeader';

const MyPageScreen = (props) => {
    
    const data = useMemo(
        () => [
          {
            question:
              '이번 달 내가 쓴 돈은',
            answer :
              '2,500,000 원',
          },
          {
            question:
              '지난 달보다 얼마나 더 많이 썼을까?',
            answer :
              '500,000 원'
          },
          {
            question:
              '지금까지 총 얼마나 썼을까',
            answer : 
              '22,480,500 원'
          },
        ],
        [],
      );

    const test = () => {
        return (
            <View>
            <View>
                <Text>이번 달 내가 쓴 돈은</Text>
            </View>
            <View>
                <Text>지난 달보다 얼마나 더 많이 썼을까?</Text>
            </View>
            <View>
                <Text>지금까지 총 얼마나 썼을까</Text>
            </View>
            <View>
                <Text>내가 지금까지 얻은 옷은 몇 벌일까</Text>
            </View>
            <View>
                <Text>내가 지금까지 얻은 신발은 몇 켤레일까</Text>
            </View>
            <View>
                <Text>내가 지금까지 얻은 가방은 몇 개일까</Text>
            </View>
            <View>
                <Text>가장 많이 돈을 쓴 달은 언제일까</Text>
            </View>
            <View>
                <Text>여행은 몇번이나 다녀왔을까</Text>
            </View>
            <View>
                <Text>내가 보낸 선물은 총 얼마일까</Text>
            </View>
            <View>
                <Text>내가 보낸 선물은 총 몇개일까</Text>
            </View>
            </View>
        );
    }


    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;
    const margin = 12;

    const cardSize = {width: windowWidth - 24 * 2, height: 400};


    return (
        <View style={[styles.container]}> 
            <SafeAreaView>
                <ScrollView style={[styles.scrollContainer]}>
                    <View style={[styles.titleArea]}>
                        <Text style={[styles.titleStyle]}>내 바구니 상태</Text>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:30}}>
                        <View style={{borderWidth:2,width:80,height:80,borderRadius:50}}></View>
                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:30}}>
                            <Text style={[styles.fontCommonStyle]}>내이름은 * * *</Text>
                            <Text style={[styles.fontCommonStyle]}>해적왕이 될 때까지 존버 ! </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{borderWidth:2,flexDirection:'row',borderColor:'#FF9999'}}>
                            <View style={[styles.myStatusArea]}>
                                <Text style={[styles.fontCommonStyle,{marginBottom:10}]}>대기</Text>
                                <Text style={[styles.fontCommonStyle]}>4 건</Text>
                            </View>
                            <View style={[styles.myStatusArea]}>
                                <Text style={[styles.fontCommonStyle,{marginBottom:10}]}>진행중</Text>
                                <Text style={[styles.fontCommonStyle]}>4 건</Text>
                            </View>
                            <View style={[styles.myStatusArea]}>
                                <Text style={[styles.fontCommonStyle,{marginBottom:10}]}>완료</Text>
                                <Text style={[styles.fontCommonStyle]}>4 건</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:30}}>
                        <FlatList
                            data={data}
                            horizontal
                            contentContainerStyle={{paddingHorizontal: 10}}
                            renderItem={({item}) => (
                            <TouchableOpacity style={{marginRight: margin}}>
                                <View style={{borderWidth:1,width: windowWidth / 2 ,height:200, flexDirection:'column'}}>
                                    <Text style={[styles.fontCommonStyle]}>{item.question}</Text>
                                    <Text style={[styles.fontCommonStyle]}>{item.answer}</Text>
                                </View>
                            </TouchableOpacity>
                            )}
                            keyExtractor={(_, index) => String(index)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

        
    )

}

const styles = StyleSheet.create({
    myStatusArea : {
        borderWidth:1,
        flexDirection:'column',
        flex:1,
        padding:10,
        alignItems:'center',
        borderColor:'#FF9999'
    },

    titleArea : {
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },
    titleStyle : {
      fontWeight: 'bold',
      color: '#FF9999',
      fontSize: 30,
      alignItems: 'center'
    },
    fontCommonStyle : {
        color: '#FF9999',
        fontSize: 18,
        alignItems: 'center'
      },
    container: {
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        height: '100%',
        paddingHorizontal:20
    },
  });

export default MyPageScreen;