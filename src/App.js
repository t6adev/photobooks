import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LocalImagePicker from './LocalImagePicker';
import LocalImageViewer from './LocalImageViewer';

const HomeScreen = () => (
  <View style={{ flex: 1 }}>
    <Text>Home!</Text>
  </View>
);

class LocalImagesScreen extends React.Component {
  state = {
    imageRoll: { images: [], pageInfo: null },
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LocalImagePicker onClick={info => this.setState({ imageRoll: { ...info } })}/>
        <LocalImageViewer images={this.state.imageRoll.images} />
      </View>
    );
  }
}

class AlbumScreen extends React.Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Albums</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  LocalImages: { screen: LocalImagesScreen },
  Albums: { screen: AlbumScreen },
});
