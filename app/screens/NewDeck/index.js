import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import { createDeck } from '../../actions';
import { connect } from 'react-redux';

class NewDeck extends React.Component {

  state = {
    title: ''
  }

  handleTitleChange = (title) => {
    this.setState({title})
  }

  onCreateNewDeck = () => {
    const deck = {
      title: this.state.title,
      cards: []
    }
    this.props.dispatch(createDeck(deck));
  }

  render() {
    return (<View>
      <Text>What is the title of your new deck?</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleTitleChange}
        value={this.state.title}
      />
      <Button
        onPress={this.onCreateNewDeck}
        title="Submit"
        color="#841584"
        accessibilityLabel="Create a new deck"
      />
    </View>)
  }
}

export default connect()(NewDeck);
