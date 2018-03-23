import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const commentBtnTitle = ['Edit', 'Complete'];

export default class PhotoPageComponent extends React.Component {
  state = {
    commentText: '(Placeholder)',
    editting: false,
    editCommentBtnTitle: commentBtnTitle[0],
    category: 'default',
    tags: [],
  };
  onPressEditCommentBtn = () => {
    const { editting } = this.state;
    if (editting) {
      this.setState({
        editting: false,
        editCommentBtnTitle: commentBtnTitle[0],
      });
    } else {
      this.setState({
        editting: true,
        editCommentBtnTitle: commentBtnTitle[1],
      });
    }
  };
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
        <View>{this.state.tags.map(tag => <Text>#{tag}</Text>).join(' ')}</View>
        <View><Text>Category: {this.state.category}</Text>></View>
        {this.state.editting ? (
          <TextInput
            style={{ flex: 1, height: 40 }}
            onChangeText={commentText => this.setState({ commentText })}
            value={this.state.commentText}
          />
        ) : (
          <Text>{this.state.commentText}</Text>
        )}
        <Button title={this.state.editCommentBtnTitle} onPress={this.onPressEditCommentBtn} />
      </View>
    );
  }
}
