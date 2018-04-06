import React from 'react';
import { View, Text, Image } from 'react-native';
import PhotoPage from './PhotoPage';

export default class AlbumComponent extends React.Component {
  render() {
    const { info } = this.props;
    const { title, tags, description, photos } = info;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{tags.map(tag => `#${tag}`).join(' ')}</Text>
        <Text>{description}</Text>
        <View>{photos.map(photo => (
          <View>
            <Image source={{ uri: photo.uri }} />
          </View>
        ))}</View>
      </View>
    );
  }
}
