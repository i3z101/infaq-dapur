import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = (props) => {
  return <View style={styles.container}>
    <Text style={styles.text}>About Screen</Text>
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

module.exports = About;

