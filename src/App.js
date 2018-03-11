import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePicker from './ImagePicker';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>app!</Text>
        <ImagePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
