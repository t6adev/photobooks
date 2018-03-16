import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default class LocalImageViewerComponent extends React.Component {
  onPress = (node) => {
    console.log(node);
  }
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.images.map(({ node }) => {
            return (
              <TouchableOpacity key={node.image.uri} onPress={() => this.onPress(node)}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  source={{ uri: node.image.uri }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
