import React from 'react';
import { View, Text } from 'react-native';
import Album from './Album';

export default class AlbumsComponent extends React.Component {
  render() {
    const { albums } = this.props;
    return (
      <View>
        {albums.map(album => <Album info={album} />)}
      </View>
    );
  }
}
