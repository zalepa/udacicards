import React from 'react';
import {Button, Text, View} from 'react-native';
import { connect } from 'react-redux';

class StartQuiz extends React.Component {

  state = {
    currentCardNumber: 0,
    viewState: 'question',
    correctAnswers: 0
  }

  toggleViewState = () => {
    this.state.viewState === 'question'
      ? this.setState( { viewState: 'answer' })
      : this.setState( { viewState: 'question' })
  }

  onCorrectAnswer = () => {
    this.setState(oldState => {
      return {
        correctAnswers: oldState.correctAnswers + 1,
      }
    });

    this.moveQuestion();
  }

  moveQuestion = () => {
    if (this.state.currentCardNumber === this.props.cards.length - 1) {
      this.props.navigation.navigate('Results', {
        cards: this.props.cards.length,
        correct: this.state.correctAnswers,
      });
    } else {
      this.setState(oldState => {
        return {
          viewState: 'question',
          currentCardNumber: oldState.currentCardNumber + 1,
        }
      });
    }
  }

  render() {
    return (<View>
      <Text>{this.state.currentCardNumber} / {this.props.cards.length} ({(this.state.correctAnswers / this.props.cards.length) * 100}% correct)</Text>
      <Text>
        {this.state.viewState === 'question'
          ? this.props.cards[this.state.currentCardNumber].question
          : this.props.cards[this.state.currentCardNumber].answer
        }
      </Text>

      <Button title={this.state.viewState === 'question' ? 'View Answer' : 'View Question'} onPress={this.toggleViewState} />

      <Button title='Correct' onPress={this.onCorrectAnswer} style={{backgroundColor: 'green'}} />
      <Button title='Inorrect' onPress={this.moveQuestion} />

    </View>)
  }
}

function stateToProps(state, ownProps) {
  return {
    deck: ownProps.navigation.state.params.deck,
    cards: ownProps.navigation.state.params.deck.cards
  }
}

export default connect(stateToProps)(StartQuiz);
