import React from 'react';
import {Alert, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { addCard, deleteDeck} from '../../actions';
import { NavigationActions } from 'react-navigation';
import theme from '../../theme';

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
  hr: {
    borderBottomColor: '#CFCFCF',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    flex: 0.1
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
    return (
      <View style={styles.deck}>
        <View style={{flex: 0.6}}>
          <Text style={[styles.header]}>{this.props.deck.title}</Text>
          <Text style={[{flex: 0.1}, styles.size]}>{this.props.deck.cards.length} cards</Text>
        </View>
        <TouchableOpacity style={[styles.button, theme.button]} onPress={this.addCard}>
          <Text style={theme.buttonText}>Add Card</Text>
        </TouchableOpacity>

        {this.props.deck.cards.length > 0 &&
          <TouchableOpacity style={[styles.button, theme.button, theme.altButton]}  onPress={this.startQuiz}>
            <Text style={theme.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        }

        <View style={styles.hr}/>

        <TouchableOpacity style={[styles.button, theme.button]}  onPress={this.editDeck}>
          <Text style={theme.buttonText}>Edit Deck</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, theme.button, theme.dangerButton]}  onPress={this.deleteDeck}>
          <Text style={theme.buttonText}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
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
