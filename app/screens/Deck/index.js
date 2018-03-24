import React from 'react';
import {Button, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class Deck extends React.Component {

  addCard = () => {
    this.props.navigation.navigate('AddCard', { deck: this.props.deck, addCard: this.props.persistCard });
  }
  startQuiz = () => {
    this.props.navigation.navigate('StartQuiz', { deck: this.props.deck });
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
  const propDeck = ownProps.navigation.state.params.deck;
  return {
    deck: state.decks.filter(d => {
      if (d.key === propDeck.key) return d;
    })[0]
  }
}

function dispatchToProps(dispatch) {
  return {
    persistCard: (key, card) => {
      dispatch(addCard(key, card));
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Deck);
