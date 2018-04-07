import React from 'react';
import { View, Button } from 'react-native';

export default class AddButtonComponent extends React.Component {
  render() {
    const { onPress } = this.props;
    return (
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
          backgroundColor: 'darkred',
        }}
      >
        <Button onPress={onPress} title="+" color="white" />
      </View>
    );
  }
}
