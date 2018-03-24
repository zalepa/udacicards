import React from 'react';
import {
  Alert,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {addCard} from '../../actions';
import styles from './styles';

class AddCard extends React.Component {

  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = (question) => {
    this.setState(oldState => {
      return {
        ...oldState,
        question
      }
    })
  }

  handleAnswerChange = (answer) => {
    this.setState(oldState => {
      return {
        ...oldState,
        answer
      }
    })
  }

  addCard = () => {

    const q = this.state.question;
    const a = this.state.answer;

    if (!q || !a) {
      let msg = ''
      if (!q && !a)
        msg = 'Question and answer are both required';
      else if (!q)
        msg = 'Question is required'
      else
        msg = 'Answer is required'

      Alert.alert('Error', msg);

      return;
    }

    this.props.addCard(this.props.deck.key, this.state);

    Alert.alert('Card Added', 'Successfully added a new card!', [
      {
        text: 'Keep Adding',
        onPress: () => {}
      }, {
        text: 'I\'m Done',
        onPress: () => {
          this.props.navigation.goBack();
        }
      }
    ]);
  }

  render() {
    return (<View>
      <TextInput style={styles.formInput} onChangeText={this.handleQuestionChange} value={this.state.question} placeholder="Question"/>

      <TextInput style={styles.formInput} onChangeText={this.handleAnswerChange} value={this.state.answer} placeholder="Answer"/>

      <TouchableOpacity style={styles.button} onPress={this.addCard}>
        <Text style={styles.buttonText}>Add Card</Text>
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
