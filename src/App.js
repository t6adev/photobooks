import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import LocalImagePicker from './LocalImagePicker';
import LocalImageViewer from './LocalImageViewer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home!</Text>
  </View>
);

class ImagesScreen extends React.Component {
  state = {
    imageRoll: { images: [], pageInfo: null },
  };
  render() {
    return (
      <View style={styles.container}>
        <LocalImagePicker onClick={info => this.setState({ imageRoll: { ...info } })}/>
        <ScrollView>
          <LocalImageViewer images={this.state.imageRoll.images} />
        </ScrollView>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Images: { screen: ImagesScreen },
});
