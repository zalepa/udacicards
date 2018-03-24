import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  status: {
    fontSize: 15
  },
  content: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: 'tomato',
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  buttonCorrect: {
    backgroundColor: '#6DFF83'
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    padding: 7,
    textAlign: 'center'
  }
})

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
      <Text style={styles.status}>{this.state.currentCardNumber} / {this.props.cards.length} ({(this.state.correctAnswers / this.props.cards.length) * 100}% correct)</Text>
      <Text style={styles.content}>
        {this.state.viewState === 'question'
          ? this.props.cards[this.state.currentCardNumber].question
          : this.props.cards[this.state.currentCardNumber].answer
        }
      </Text>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#FAFAFA'}]} onPress={this.toggleViewState}>
        <Text style={[styles.buttonText, { color: 'darkgray'}]}>{this.state.viewState === 'question' ? 'View Answer' : 'View Question'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button,  styles.buttonCorrect]}  onPress={this.onCorrectAnswer}>
        <Text style={styles.buttonText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button]}  onPress={this.moveQuestion}>
        <Text style={styles.buttonText}>Incorrect</Text>
      </TouchableOpacity>

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
