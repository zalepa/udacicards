import React from 'react';
import {Alert, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { addCard, deleteDeck} from '../../actions';
import { NavigationActions } from 'react-navigation';

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

  editDeck = () => {
    this.props.navigation.navigate('EditDeck', { deck: this.props.deck });
  }

  startQuiz = () => {
    this.props.navigation.navigate('StartQuiz', { deck: this.props.deck });
  }

  deleteDeck = () => {

    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this deck?',
      [
        {text: 'No' },
        {text: 'Yes', onPress: () => {
          this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home'})]
          }));

          this.props.deleteDeck(this.props.deck.key);
        }}
      ]
    )

  }


  render() {
    if (!this.props.deck) {
      return <View><Text style={{textAlign: 'center', padding: 35}}>Deleting...</Text></View>
    }
    return (<View style={styles.deck}>
      <Text style={styles.header}>{this.props.deck.title}</Text>
      <Text style={styles.size}>{this.props.deck.cards.length} cards</Text>
      <TouchableOpacity style={[styles.button]} onPress={this.addCard}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>

      {this.props.deck.cards.length > 0 &&
        <TouchableOpacity style={[styles.button, styles.altButton]}  onPress={this.startQuiz}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      }

      <TouchableOpacity style={[styles.button]}  onPress={this.editDeck}>
        <Text style={styles.buttonText}>Edit Deck</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#8C1500'}]}  onPress={this.deleteDeck}>
        <Text style={styles.buttonText}>DELETE DECK</Text>
      </TouchableOpacity>
    </View>)
  }
}

function stateToProps(state, ownProps) {
  const propDeck = ownProps.navigation.state.params.deck;
  return {
    decks: state.decks,
    deck: state.decks.filter(d => {
      if (d.key === propDeck.key) return d;
    })[0]
  }
}

function dispatchToProps(dispatch) {
  return {
    persistCard: (key, card) => {
      dispatch(addCard(key, card));
    },
    deleteDeck: (key) => {
      dispatch(deleteDeck(key));
    },
  }
}

export default connect(stateToProps, dispatchToProps)(Deck);
