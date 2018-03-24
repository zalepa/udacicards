import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

const styles = StyleSheet.create({
  deck: {
    flex: 1
  },
  header: {
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 10,
    textAlign: 'center'
  },
  size: {
    fontSize: 20,
    paddingBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center'
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
  altButton: {
    backgroundColor: '#FFBF47'
  }
});

class Deck extends React.Component {

  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;

    return {
      title: params ? params.deck.title : '',
    }
  }

  addCard = () => {
    this.props.navigation.navigate('AddCard', { deck: this.props.deck, addCard: this.props.persistCard });
  }
  startQuiz = () => {
    this.props.navigation.navigate('StartQuiz', { deck: this.props.deck });
  }


  render() {
    return (<View style={styles.deck}>
      <Text style={styles.header}>{this.props.deck.title}</Text>
      <Text style={styles.size}>{this.props.deck.cards.length} cards</Text>
      <TouchableOpacity style={[styles.button]} onPress={this.addCard}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.altButton]}  onPress={this.startQuiz}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
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
