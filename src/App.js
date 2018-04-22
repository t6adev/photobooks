import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LocalImagePicker from './LocalImagePicker';
import LocalImageViewer from './LocalImageViewer';
import AddButton from './AddButton';
import Albums from './Albums';

const HomeScreen = () => (
  <View style={{ flex: 1 }}>
    <Text>Home!</Text>
  </View>
);

class LocalImagesScreen extends React.Component {
  state = {
    loadedImages: [],
    checkedImages: [],
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddButton
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
          }}
          onPress={() => ()}
        />
        <LocalImagePicker
          onClick={info =>
            this.setState({
              loadedImages: info.images,
              checkedImages: [...this.state.checkedImages, ...info.images],
            })
          }
        />
        <LocalImageViewer
          loadedImages={this.state.loadedImages}
          checkedImages={this.state.checkedImages}
        />
      </View>
    );
  }
}

class AlbumScreen extends React.Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Albums albums={} />
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  LocalImages: { screen: LocalImagesScreen },
  Albums: { screen: AlbumScreen },
});
