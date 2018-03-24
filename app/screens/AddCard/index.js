import React from 'react';
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 22
  },
  button: {
    backgroundColor: 'tomato',
    margin: 10,
    borderRadius: 10,
    padding: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    padding: 7,
    textAlign: 'center'
  },
});

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
    if (!this.state.question || !this.state.answer) return;

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

      <TextInput
        style={styles.formInput}
        onChangeText={this.handleQuestionChange}
        value={this.state.question}
        placeholder="Question"
      />

      <TextInput
        style={styles.formInput}
        onChangeText={this.handleAnswerChange}
        value={this.state.answer}
        placeholder="Answer"
      />

      <TouchableOpacity style={styles.button} onPress={this.addCard}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>

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
