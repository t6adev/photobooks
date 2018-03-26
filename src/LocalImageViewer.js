import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const ImageBox = ({ node, width = 100, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      style={{
        width: width,
        height: width
      }}
      source={{ uri: node.image.uri }}
    />
  </TouchableOpacity>
);

const buildColums = colNum => (cols, item, index) => {
  cols[Math.ceil((index + 1) / colNum) - 1].push(item);
  return cols;
};

export default class LocalImageViewerComponent extends React.Component {
  onPress = node => {
    console.log(node);
    // TODO: when clicking a node, show checked view over the image and save the checked
  };
  render() {
    const { images, colNum = 2 } = this.props;
    const rowNum = Math.ceil(images.length / colNum);
    const colArry = Array.from({ length: rowNum }, (v, k) => k).map(() => []);
    const res = images.map(({ node }) => node).reduce(buildColums(colNum), colArry);
    const fullWidth = Dimensions.get('window').width;
    const oneWidth = fullWidth / colNum;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {res.map((cols, i) => (
            <View
              key={`image-viewer-row-${i}`}
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
              {cols.map(node => (
                <View key={node.image.uri}>
                  <ImageBox node={node} width={oneWidth} onPress={() => this.onPress(node)} />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
