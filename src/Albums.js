import React from 'react';
import { View, Text } from 'react-native';
import Album from './Album';

export default class AlbumsComponent extends React.Component {
  onChangeText(text, mode) {
    if (mode === 'title') {}
    else if (mode === 'tags') {}
    else if (mode === 'description') {}
  }
  render() {
    const { albums } = this.props;
    return (
      <View>
        {albums.map(album => <Album info={album} onChangeText={this.onChangeText} />)}
      </View>
    );
  }
}
