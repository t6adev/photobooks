import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerComponent extends React.Component {
  state = {
    pickedImageInfo: null,
  };

  onPress = async () => {
    const { cancelled, ...info } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled) {
      this.setState({ pickedImageInfo: info });
    }
  };

  render() {
    const { pickedImageInfo } = this.state;

    return (
      <View>
        <Button title="Pick an image from camera roll" onPress={this.onPress} />
        {pickedImageInfo && <Image source={{ uri: pickedImageInfo.uri }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}
