import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Color from '../../../constants/Color';
import Cards from '../../../reusable/Cards';
import {Card} from 'react-native-paper';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import BtnPackage from '../../../reusable/BtnPackage';

const Packages = (props)=>{
  let Touchable= TouchableOpacity;
  const packages= useSelector(state=>state.packageReducer.packages);
    return <FlatList
        data={packages}
        keyExtractor={(item)=>item.packageId}
        numColumns={2}
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerPackagesStyle:{
      padding:0, 
      marginLeft:7,
      marginRight:10, 
      marginTop:30,
      marginBottom:15,
      borderRadius:10,
    },
    imgStyleCard:{
      width:Dimensions.get('screen').width/2.2,
      height:Dimensions.get('screen').width/3,
    },
    btnContainer:{
      backgroundColor:Color.third,
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
  });

module.exports= Packages;

