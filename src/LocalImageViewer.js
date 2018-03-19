import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
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
    const res = images.map(({ node }) => node).reduce(buildColums(colNum), colArry);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {res.map((cols, i) => (
            <View key={`image-viewer-row-${i}`} style={styles.row}>
              {cols.map(node => (
                <View key={node.image.uri}><ImageBox node={node} /></View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
