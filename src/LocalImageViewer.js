import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const CheckedStatusView = ({ show }) => (
  <View>
    {show ? (
      <View
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          borderRadius: 20 / 2,
          top: 15,
          left: 15,
          backgroundColor: 'lightgreen',
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text style={{ color: 'white' }}>✔</Text>
          </View>
        </View>
      </View>
    ) : null}
  </View>
);

const ImageBox = ({ node, width = 100, onPress, checked }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={{ width, height: width }} source={{ uri: node.image.uri }} />
    <CheckedStatusView show={checked} />
  </TouchableOpacity>
);

const buildColums = colNum => (cols, item, index) => {
  cols[Math.ceil((index + 1) / colNum) - 1].push(item);
  return cols;
};

export default class LocalImageViewerComponent extends React.Component {
  state = {
    localCheckeds: this.props.loadedImages.map(i => ({ ...i, checked: false })),
  };
  onPress = node => {
    console.log(node);
    // TODO: when clicking a node, show checked view over the image and save the checked
    this.setState({
      localCheckeds: this.state.localCheckeds.map(old => {
        if (old.image.uri === node.image.uri) {
          if (old.checked) {
            this.props.checkedImages.push(node);
          } else {
            this.props.checkedImages = this.props.checkedImages.filter(
              i => i.image.uri !== node.image.uri
            );
          }
          return {
            ...old,
            checked: !old.checked,
          };
        }
        return old;
      }),
    });
  };
  render() {
    const { loadedImages, colNum = 2 } = this.props;
    const rowNum = Math.ceil(loadedImages.length / colNum);
    const colArry = Array.from({ length: rowNum }, (v, k) => k).map(() => []);
    const res = loadedImages.map(({ node }) => node).reduce(buildColums(colNum), colArry);
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
              }}
            >
              {cols.map((node, index) => (
                <View key={node.image.uri}>
                  <ImageBox
                    node={node}
                    width={oneWidth}
                    onPress={() => this.onPress(node)}
                    checked={this.state.localCheckeds[index].checked}
                  />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
