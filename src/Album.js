import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import PhotoPage from './PhotoPage';

export default class AlbumComponent extends React.Component {
  render() {
    const { info, editing, onChangeText } = this.props;
    const { title, tags, description, photos } = info;
    return (
      <View>
        {editing ? (
          <TextInput
            onChangeText={text => onChangeText(text, 'title')}
            // value={}
          />
        ) : (
          <Text>{title}</Text>
        )}
        {editing ? (
          <TextInput
            onChangeText={text => onChangeText(text, 'tags')}
            // value={}
          />
        ) : (
          <Text>{tags.map(tag => `#${tag}`).join(' ')}</Text>
        )}
        {editing ? (
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={text => onChangeText(text, 'description')}
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
