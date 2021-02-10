import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Areas = (props) => {
  return <View style={styles.container}>
    <Text style={styles.text}>Areas Screen</Text>
    <Button title='Area' onPress={() => props.navigation.navigate('area')} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    fontFamily: 'cairoBold'
  }
});

module.exports = Areas;

