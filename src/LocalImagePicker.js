import React from 'react';
import { Button, View, CameraRoll } from 'react-native';

export default class LocalImagePickerComponent extends React.Component {
  onPress = async () => {
    const { edges: images, page_info: pageInfo } = await CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    });
    console.log(pageInfo);
    if (images) {
      this.props.onClick({ images, pageInfo });
    }
  };

  render() {
    return (
      <View>
        <Button title={this.props.title || 'Load Images'} onPress={this.onPress} />
      </View>
    );
  }
}
