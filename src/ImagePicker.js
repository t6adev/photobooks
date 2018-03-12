import React from 'react';
import { Button, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerComponent extends React.Component {
  onPress = async () => {
    const { cancelled, ...info } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled) {
      this.props.pickedUp(info);
    }
  };

  render() {
    return (
      <View>
        <Button title="Pick an image from camera roll" onPress={this.onPress} />
      </View>
    );
  }
}
