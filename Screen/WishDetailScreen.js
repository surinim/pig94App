import { NavigationContainer } from '@react-navigation/native';
// import { Navigation } from 'react-native-navigation';
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
    BackHandler
  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import * as Linking from 'expo-linking';
import * as Progress from 'react-native-progress';
  
const WishDetailScreen = (props) => {
        return (
            <SafeAreaView>
              <HeaderArea navigation={props.navigation}/>
              <ScrollView style={[styles.scrollContainer]}>
                <View style={[styles.itemImageView]}>
                  <Image source={require('../resource/sample/wish_sample.jpeg')} style={[styles.itemImage]}/>
                </View>
                <View style={[styles.itemInfoView]}>
                    <Text style={[styles.itemBrandName]}>Urbanic30</Text>
                    <Text style={[styles.itemTitle]}>Yatch Small Bag</Text>
                    <Text style={[styles.itemPrice]}>128,000원</Text>
                    <TouchableOpacity onPress={()=>link("http://www.urbanic30.com")}>
                      <Text style={[styles.itemLink]}>http://www.urbanic30.com</Text>
                    </TouchableOpacity>
                    <View style={[styles.progressBarView]}>
                      <ProgressBar totalPrice={128000} saveMoney={100000}/>
                    </View>
                </View>
              </ScrollView>
          </SafeAreaView>
        )
    
  }

  const HeaderArea = (props) => {
    return(
        <View style={{flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
                <TouchableOpacity onPress={()=> {props.navigation.pop()}}>
                    <Image source={require('../resource/common/backBtn.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

const link = (linkUrl) => {
  Linking.openURL(linkUrl)
}

const ProgressBar = ({totalPrice, saveMoney}) => {
  let progress = 0
  // 분모가 0이 되지 않도록 체크
  if (totalPrice !== 0) {
    progress = saveMoney / totalPrice 
  }
  
  console.log(progress);
  return (
    <Progress.Bar 
      progress={progress} 
      width={360} 
      height={20} 
      borderRadius={1} 
      color={"#AB7BC5"}
      unfilledColor={"#D8D8D8"}
      borderWidth={0}
      />
  );
}

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        height: '100%'
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
    }
  });

  export default WishDetailScreen;
  