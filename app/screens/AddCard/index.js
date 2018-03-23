import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends React.Component {

  state = {
    question: '',
    answer:   '',
  }

  handleQuestionChange = (question) => {
    this.setState(oldState => {
      return {...oldState, question }
    })
  }

  handleAnswerChange = (answer) => {
    this.setState(oldState => {
      return {...oldState, answer }
    })
  }

  addCard = () => {
    this.props.dispatch(addCard(this.props.deck.key, this.state));
    this.props.navigation.navigate('Deck', { deck: this.props.deck })
  }

  render() {
    return (<View>
      <Text>Question</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleQuestionChange}
        value={this.state.question}
      />

      <Text>Answer</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleAnswerChange}
        value={this.state.answer}
      />

      <Button title="Add Card" onPress={this.addCard} />

    </View>)
  }
}

function stateToProps(state, ownProps) {
  return {
    deck: ownProps.navigation.state.params.deck
  }
}

export default connect(stateToProps)(AddCard);
