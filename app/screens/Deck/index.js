import React from 'react';
import {Button, Text, View} from 'react-native';
import { connect } from 'react-redux';

class Deck extends React.Component {

  addCard = () => {
    this.props.navigator.navigate('AddCard', { deck: this.props.deck });
  }
  startQuiz = () => {
    this.props.navigator.navigate('StartQuiz', { deck: this.props.deck });
  }

  render() {
    return (<View>
      <Text>{this.props.deck.title}</Text>
      <Text>{this.props.deck.cards.length} cards</Text>
      <Button title="Add Card" onPress={this.addCard} />
      <Button title="Start Quiz" onPress={this.startQuiz}/>
    </View>)
  }
}

function stateToProps(state, ownProps) {
  return {
    deck: ownProps.navigation.state.params.deck
  }
}

export default connect(stateToProps)(Deck);
