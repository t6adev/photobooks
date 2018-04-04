import React from 'react';
import { View, Text } from 'react-native';

export default class AlbumComponent extends React.Component {
  render() {
    const { info } = this.props;
    const { title, tags, description, photos } = info;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{tags.map(tag => `#${tag}`).join(' ')}</Text>
        <Text>{description}</Text>
        {/* <View>{photos}</View> */}
      </View>
    );
  }
}
