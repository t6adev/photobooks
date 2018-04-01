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
  <View
    style={
      (show && {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        top: 15,
        left: 15,
        backgroundColor: 'lightgreen',
      }) ||
      {}
    }
  >
    {show ? (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white' }}>✔</Text>
        </View>
      </View>
    ) : null}
  </View>
);

class ImageBox extends React.Component {
  state = {
    checked: false,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked,
    });
  }
  render() {
    const { node, width = 100, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ checked: !this.state.checked });
          onPress(node);
        }}
      >
        <Image style={{ width, height: width }} source={{ uri: node.image.uri }} />
        <CheckedStatusView show={this.state.checked} />
      </TouchableOpacity>
    );
  }
}

const buildColums = colNum => (cols, item, index) => {
  cols[Math.ceil((index + 1) / colNum) - 1].push(item);
  return cols;
};

export default class LocalImageViewerComponent extends React.Component {
  state = {
    localCheckeds: [],
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      localCheckeds: nextProps.loadedImages.map(i => ({ ...i, checked: false })),
    });
  }
  onPress = node => {
    console.log(node);
    // TODO: when clicking a node, show checked view over the image and save the checked
    this.setState({
      localCheckeds: this.state.localCheckeds.map(old => {
        if (old.node.image.uri === node.image.uri) {
          if (old.checked) {
            this.props.checkedImages.push(node);
          } else {
            this.props.checkedImages = this.props.checkedImages.filter(
              i => i.node.image.uri !== node.image.uri
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
    let counter = 0;
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
                    checked={this.state.localCheckeds[counter++].checked}
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
