import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Auth = (props)=>{
    return <View style={styles.container}>
            <Text>Auth Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

module.exports= Auth;

