import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

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
    this.props.addCard(this.props.deck.key, this.state);

    const setParamsAction = NavigationActions.setParams({
      params: {deck: this.props.deck},
      key: 'Deck'
    });

    this.props.navigation.dispatch(setParamsAction);
    this.props.navigation.goBack();
  }

  render() {
    console.log();
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
    deck: ownProps.navigation.state.params.deck,
    addCard: ownProps.navigation.state.params.addCard,
  }
}

export default connect(stateToProps)(AddCard);
