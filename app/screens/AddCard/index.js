import React from 'react';
import { Alert, TouchableOpacity, TextInput, Text, View, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {addCard} from '../../actions';
import theme from '../../theme.js';

class AddCard extends React.Component {
  // Managed state
  state = {
    question: '',
    answer: ''
  }

  handleTextfieldChange = (stateComponent) => {
    return (component) => {
      this.setState(oldState => {
        return {
          ...oldState,
          [stateComponent]: component
        }
      })
    }
  }

  validate = ({question, answer}) => {
    if (question && answer) return;
    if (!question && !answer) return 'Question and answer are both required';
    else if (!question) return 'Question is required'
    else return 'Answer is required'
  }

  addCard = () => {
    let msg = this.validate(this.state);

    if (msg) {
      return Alert.alert('Error', msg);
    }

    const {key} = this.props.deck;

    this.props.addCard(key, this.state);

    Alert.alert('Card Added', 'Successfully added a new card!', [
      {
        text: 'Keep Adding',
        onPress: () => {
          this.setState({
            question: '', answer: ''
          })
        }
      }, {
        text: 'I\'m Done',
        onPress: () => {
          this.props.navigation.goBack();
        }
      }
    ]);
  }

  render() {
    return (
      <View>
      <TextInput style={theme.textfield}
                 onChangeText={this.handleTextfieldChange('question')}
                 value={this.state.question}
                 placeholder="Question"/>

      <TextInput style={theme.textfield}
                 onChangeText={this.handleTextfieldChange('answer')}
                 value={this.state.answer}
                 placeholder="Answer"/>

      <TouchableOpacity style={theme.button} onPress={this.addCard}>
        <Text style={theme.buttonText}>Add Card</Text>
      </TouchableOpacity>

    </View>)
  }
}

function stateToProps(state, ownProps) {
  const {deck, addCard} = ownProps.navigation.state.params
  const activeDeck = state.decks.find(d => d.key === deck.key);
  return {decks: state.decks, deck: activeDeck, cards: activeDeck.cards}
}

function dispatchToProps(dispatch) {
  return {
    addCard: (key, card) => {
      dispatch(addCard(key, card))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(AddCard);
