import React from 'react';
import { View, TextInput } from 'react-native';

export default class PhotoPageComponent extends React.Component {
  state = { text: 'Placeholder' };
  render() {
    // TODO: Image Area, Text Area, Tagging, Category
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'gray',
            width: 100,
            height: 100,
          }}
        />
        <TextInput
          style={{ flex: 1, height: 40 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
