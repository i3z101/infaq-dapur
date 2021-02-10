import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import { Card } from 'react-native-paper';


const Cards= props=>{
    let Touachable= TouchableOpacity;
    return <Card style={{...props.cardContainer, ...props.style}}>
            {props.children}
        </Card>
}

export default Cards;