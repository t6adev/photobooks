import React from 'react';
import { View, ScrollView, Image } from 'react-native';

export default class LocalImageViewerComponent extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.images.map(({ node }) => {
            return (
              <Image
                key={node.image.uri}
                style={{
                  width: 100,
                  height: 100,
                }}
                source={{ uri: node.image.uri }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
