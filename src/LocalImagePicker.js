import React from 'react';
import { Button, View, CameraRoll } from 'react-native';

export default class LocalImagePickerComponent extends React.Component {
  state = {
    endCursor: '',
  };
  onPress = async () => {
    const { edges: images, page_info: pageInfo } = await CameraRoll.getPhotos({
      first: 20,
      after: this.state.endCursor,
      assetType: 'Photos',
      // groupName: 'LINE', TODO: implement setting it feature
    });
    if (images) {
      this.setState({ endCursor: pageInfo.end_cursor });
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
