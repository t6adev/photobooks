import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import PhotoPage from './PhotoPage';

export default class AlbumComponent extends React.Component {
  render() {
    const { info, editing } = this.props;
    const { title, tags, description, photos } = info;
    return (
      <View>
        {editing ? (
          <TextInput
            onChangeText={() => {}}
            // value={}
          />
        ) : (
          <Text>{title}</Text>
        )}
        {editing ? (
          <TextInput
            onChangeText={() => {}}
            // value={}
          />
        ) : (
          <Text>{tags.map(tag => `#${tag}`).join(' ')}</Text>
        )}
        {editing ? (
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={() => {}}
            // value={}
            editable={true}
          />
        ) : (
          <Text>{description}</Text>
        )}
        <View>
          {photos.map(photo => (
            <View>
              <Image source={{ uri: photo.uri }} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}
