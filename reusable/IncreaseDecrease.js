import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';


const IncreaseDecrease= props =>{
    return <View style={props.setQuantityContainer}>
    <Button children={'+'} mode={'contained'} color={props.colorPlus} onPress={props.addQuantity} style={props.btnStyle}/>
    <View style={props.quantityContainer}>
    <Text style={props.quantityStyle}>{props.quantity}</Text>
    </View>
    <Button children={'-'} mode={'contained'} color={props.colorMinus} onPress={props.decreaseQuantity} style={props.btnStyle}/>
  </View>
}

export default IncreaseDecrease; 