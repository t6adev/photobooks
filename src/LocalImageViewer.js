import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ImageBox = ({ node }) => (
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

const buildColums = colNum => (cols, item, index) => {
  cols[Math.ceil((index + 1) / colNum) - 1].push(item);
  return cols;
};

export default class LocalImageViewerComponent extends React.Component {
  onPress = node => {
    console.log(node);
  };
  render() {
    const { images, colNum = 2 } = this.props;
    const rowNum = Math.ceil(images.length / colNum);
    const colArry = Array.from({ length: rowNum }, (v, k) => k).map(() => []);
    console.log({ rowNum, colArry });
    const res = images.map(({ node }) => node).reduce(buildColums(colNum), colArry);
    console.log(res);
    return (
      <View>
        <ScrollView>
          {images
            .map(({ node }) => node)
            .reduce(buildColums(colNum), colArry)
            .map(cols => (
              <View key={cols.length} style={styles.container}>
                {cols.map(node => <ImageBox key={node.image.uri} node={node} />)}
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}
