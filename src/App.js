import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import ImagePicker from './ImagePicker';

export default class App extends React.Component {
  state = {
    pickedImageInfo: null,
    images: [],
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>app!</Text>
        <ImagePicker pickedUp={info => this.setState({ pickedImageInfo: info, images: [info, ...this.state.images] })}/>
        {this.state.images.map(img => <Image key={img.uri} source={{ uri: img.uri }} style={{ width: 200, height: 200 }} />)}
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
