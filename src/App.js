import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import LocalImagePicker from './LocalImagePicker';
import LocalImageViewer from './LocalImageViewer';

export default class App extends React.Component {
  state = {
    imageRoll: { images: [], pageInfo: null },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>app!</Text>
        <ScrollView>
          <LocalImagePicker onClick={info => this.setState({ imageRoll: { ...info } })}/>
          <LocalImageViewer images={this.state.imageRoll.images} />
        </ScrollView>
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
