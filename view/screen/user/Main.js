import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import {Card} from 'react-native-paper';
import Cards from '../../../reusable/Cards';
import Color from '../../../constants/Color';
import { useSelector } from 'react-redux';
import BtnPackage from '../../../reusable/BtnPackage';
import LottieView from 'lottie-react-native';
const Main = (props)=>{


  /**
   * * To display all packages
   */
  const packages= useSelector(state=>state.packageReducer.packages);

  
  let Touchable= TouchableOpacity;

    return <View style={{flex:1}}>
            {/** To make the page scrollable */}
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}> 
            
            {/** Packages list which displayed horizontally */}
            <View style={{marginTop:15}}>
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <LottieView source={require('../../../assets/imgs/hand1.json')} autoPlay style={{height:60, width:60}}/>
                  <LottieView source={require('../../../assets/imgs/pay1.json')} autoPlay style={{height:60, width:60, marginLeft:Platform.OS==='android'?-40:-25, marginRight:10}}/>
                  <LottieView source={require('../../../assets/imgs/donate1.json')} autoPlay style={{height:60, width:60}}/>
                  <LottieView source={require('../../../assets/imgs/tick1.json')} autoPlay style={{height:60, width:60}}/>
              </View>
            </View>
            <View>
                <FlatList

            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={packages}
            keyExtractor={(item)=>item.packageId}
            renderItem={(itemData)=>{
              return <Cards cardContainer={styles.containerPackagesStyle}>
                  <Card.Cover style={styles.imgStyleCard} source={{uri:itemData.item.imageUrl}}/>
                 
                  <BtnPackage
                  onPress={()=>props.navigation.navigate('package',{
                    packageId:itemData.item.packageId,
                    imageUrl: itemData.item.imageUrl,
                    packageName:itemData.item.packageName,
                    price:itemData.item.price
                  })}
                  packageName={itemData.item.packageName}
                  />
                  
              </Cards>
            }}
            />
            
            </View>
        
            <ImageBackground style={{...styles.imgStyle, marginVertical:'7%', height:350}} source={require('../../../assets/imgs/give.jpg')}>
            <Touchable style={styles.btnContainer} onPress={()=>props.navigation.navigate('all packages')}>
                <Text style={styles.btnText}>Make a difference</Text>
                <View style={{position:'absolute', left:'95%', top:'45%'}}>
                  <FontAwesome5 name="hand-holding-heart" size={22} color={Color.secondary}/>
                </View>
                
            </Touchable>
            </ImageBackground>
            {/** Slide show section */}
            <View style={{marginBottom:'10%'}}>
            <SliderBox
            sliderBoxHeight={300}
            disableOnPress={false}
            dotColor={Color.primary}
            inactiveDotColor={Color.third}
            images={
              [
                require('../../../assets/imgs/6.jpeg'),
                require('../../../assets/imgs/1.jpeg'),
                require('../../../assets/imgs/2.jpeg'),
                require('../../../assets/imgs/3.jpeg'),
                require('../../../assets/imgs/4.jpeg'),
                require('../../../assets/imgs/5.jpeg'),
              ]
            }
          />
            </View>
           
            
            
            </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: { //container of the whole page
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgStyle:{ //the image style that was deleted
      width:Dimensions.get('screen').width,
      height:Dimensions.get('screen').width/1.5,
    },
    containerPackagesStyle:{// the container of package card that holds the image and package name button
      padding:0, 
      marginLeft:10,
      marginRight:10, 
      marginTop:30,
      borderRadius:10,
    },
    imgStyleCard:{ //the image style inside the card 
      width:Dimensions.get('screen').width/1.8,
      height:Dimensions.get('screen').width/2.5,
    },
    btnContainer:{ //the button container that leads to packages list page {Make a difference btn}
      backgroundColor:Color.fifth,
      width:'60%',
      padding:15,
      alignSelf:'center',
      // marginVertical:'20%',
      borderRadius:15,
      position:'absolute',
      top:'81.5%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    btnText:{ //style text inside the button 
      fontSize:18, 
      color: Color.secondary,
      fontFamily:'carter',
    }
});

module.exports= Main;

