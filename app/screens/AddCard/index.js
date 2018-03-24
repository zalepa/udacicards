import React from 'react';
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import styles from './styles';

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
    console.log(this.props);
    if (!this.state.question || !this.state.answer) return;

    this.props.addCard(this.props.deck.key, this.state);

    console.log(this.props.deck);

    const setParamsAction = NavigationActions.setParams({
      params: {deck: this.props.deck},
      key: 'Deck'
    });

    this.props.navigation.dispatch(setParamsAction);
    // this.props.navigation.goBack();
  }

  render() {
    return (<View>

      <Text>Current: {this.props.cards.length} cards</Text>

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
  const {deck, addCard} = ownProps.navigation.state.params
  const activeDeck = state.decks.find(d => d.key === deck.key);
  return {
    decks: state.decks,
    deck: activeDeck,
    cards: activeDeck.cards
  }
}

function dispatchToProps(dispatch) {
  return {
    addCard: (key, card) => {
      dispatch(addCard(key, card))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(AddCard);
