import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Color';


const Area = props => {
    return <View style={styles.container}>
        <Text style={styles.text}>Area details</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 19,
        fontFamily: 'cairoBold'
    }
})

export default Area