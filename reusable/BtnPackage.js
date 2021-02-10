import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Card} from 'react-native-paper';
import { MaterialIcons} from '@expo/vector-icons';
import Color from '../constants/Color';

const BtnPackage= props =>{
    return <TouchableOpacity onPress={props.onPress} style={styles.packageBtnContainer}>
        <Text style={styles.packageName}>{props.packageName}</Text>
        <Card.Actions>
        <MaterialIcons name={"keyboard-arrow-right"} size={40} color={Color.secondary} />
        </Card.Actions>
    </TouchableOpacity>
}

const styles= StyleSheet.create({
    packageBtnContainer:{ //the button container that leads to package detail page
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        padding:10, 
        backgroundColor:Color.fifth,
        borderRadius:3
      },
       packageName:{ //package name style
      fontSize:19, 
      color:Color.secondary, 
      fontFamily:'cairoBold'
    },
})

export default BtnPackage