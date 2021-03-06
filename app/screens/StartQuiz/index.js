import React from 'react';
import {Alert, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import theme from '../../theme';
import { clearLocalNotifications, setLocalNotification } from '../../utils/notification';
const styles = StyleSheet.create({
  status: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },
  content: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonCorrect: {
    backgroundColor: '#6DFF83'
  },
})

class StartQuiz extends React.Component {

  state = {
    currentCardNumber: 0,
    viewState: 'question',
    correctAnswers: 0,
    quizOver: false
  }

  toggleViewState = () => {
    this.state.viewState === 'question'
      ? this.setState( { viewState: 'answer' })
      : this.setState( { viewState: 'question' })
  }

  onCorrectAnswer = () => {
    this.setState((oldState) => {
      return {
        correctAnswers: oldState.correctAnswers + 1
      }
    }, () => {
      this.moveQuestion();
    });
  }

  displayResults = () => {
    const correct = this.state.correctAnswers;
    const all = this.props.cards.length;
    const pct = Math.round(100*(correct/all));

    clearLocalNotifications()
      .then(setLocalNotification);

    const msg = `You got ${correct} out of ${all} right (${pct}%)`

    Alert.alert('Quiz Completed', msg, [
      {
        text: 'OK',
        onPress: () => {
          this.props.navigation.goBack();
        }
      }
    ]);
  }

  moveQuestion = () => {

    if (this.state.currentCardNumber === this.props.cards.length - 1) {
      this.displayResults();
      return;
    }

    this.setState((oldState) => {
      return {
        currentCardNumber: oldState.currentCardNumber + 1
      }
    })
  }

  render() {

    const { currentCardNumber, correctAnswers } = this.state;
    const {cards} = this.props.deck

    return (<View>
      <Text style={styles.status}>
        <Text>{currentCardNumber} / {cards.length}</Text>
        <Text> ({Math.round((correctAnswers / cards.length) * 100)}% correct)</Text>
      </Text>

      <Text style={styles.content}>
        {this.state.viewState === 'question'
          ? cards[currentCardNumber].question
          : cards[currentCardNumber].answer
        }
      </Text>

      <TouchableOpacity style={[theme.button, {backgroundColor: '#FAFAFA'}]} onPress={this.toggleViewState}>
        <Text style={[theme.buttonText, { color: 'darkgray'}]}>{this.state.viewState === 'question' ? 'View Answer' : 'View Question'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[theme.button,  styles.buttonCorrect]}  onPress={this.onCorrectAnswer}>
        <Text style={theme.buttonText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[theme.button]}  onPress={this.moveQuestion}>
        <Text style={theme.buttonText}>Incorrect</Text>
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
