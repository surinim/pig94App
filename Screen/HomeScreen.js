import { NavigationContainer } from '@react-navigation/native';
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
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
  
const HomeScreen = (props) => {
        return (
            <SafeAreaView>
              <View style={{paddingHorizontal: 10, paddingVertical:100}}>
                <View style={[styles.loginView]}>
                  <Text style={[styles.logo]}>PIG94</Text>
                  <TextInput style={[styles.textInput]} placeholder="이메일 주소 또는 아이디"></TextInput>
                  <TextInput style={[styles.textInput]} secureTextEntry={true} placeholder="패스워드"></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{console.log("!!!")}}>
                      <View style={{width: 15, height: 15, borderWidth: 1, marginRight: 5}}></View>
                      <Text>로그인 상태 유지</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{width: '100%', height: 40, justifyContent: 'center', alignItems: 'center',marginBottom:15,
                                            marginTop: 20, borderRadius: 4, backgroundColor: '#FF9999'}} 
                                    onPress={()=>{props.navigation.navigate("Bottom")}}>
                    <Text style={{color: '#fff'}}>로그인</Text>
                  </TouchableOpacity>
                  <View style={{alignItems:'center', flexDirection: 'row'}}>
                    <View style={{flex:1, alignItems:'center'}}><TouchableOpacity style={{marginRight: 10}} onPress={()=>{}}><Text>아이디 찾기</Text></TouchableOpacity></View>
                    <View style={{flex:1, alignItems:'center'}}><TouchableOpacity style={{marginRight: 10}} onPress={()=>{}}><Text>비밀번호 재설정</Text></TouchableOpacity></View>
                    <View style={{flex:1, alignItems:'center'}}><TouchableOpacity style={{marginRight: 10}} onPress={()=>{}}><Text>회원가입</Text></TouchableOpacity></View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop:100, width: 200, alignSelf: 'center'}}>
                    <View style={{flex:1, alignItems:'center'}}>
                      <TouchableOpacity onPress={()=>{}}>
                        <Image source={require('../resource/login_image/ico-naver.png')} style={{width:50,height:50}}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                      <TouchableOpacity onPress={()=>{}}> 
                        <Image source={require('../resource/login_image/ico-google.png')} style={{width:50,height:50}}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                      <TouchableOpacity onPress={()=>{}}> 
                        <Image source={require('../resource/login_image/ico-kakao.png')} style={{width:50,height:50}}/>
                      </TouchableOpacity>
                  </View>
                </View>  
              </View>
          </SafeAreaView>
        )
    
  }

  const styles = StyleSheet.create({
    logo: {
      fontWeight: 'bold',
      color: '#FF9999',
      fontSize: 80,
      alignItems: 'center',
      marginBottom: 50
    },

    loginView: {
      alignItems: 'center'
    },

    textInput: {
      borderWidth: 1,
      borderColor: '#B2B1B9',
      width: '100%',
      height: 40,
      marginBottom: 10,
      borderRadius: 4,
      paddingVertical: 5,
      paddingHorizontal:10,
    },

    loginState: {
      alignItems:'flex-start'
    }
  });

  export default HomeScreen;
  