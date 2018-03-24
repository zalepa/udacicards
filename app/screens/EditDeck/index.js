import React from 'react';
import {Alert, TextInput, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { editDeck } from '../../actions';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 10,
    fontSize: 15
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
});

class EditDeck extends React.Component {
  state = {
    key: null,
    title: ''
  }
  componentDidMount = () => {
    this.setState({key: this.props.deck.key, title: this.props.deck.title})
  }

  handleTitleChange = (title) => {
    this.setState({title})
  }

  onEditDeck = () => {
    this.props.editDeck(this.state);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.formInput}
          placeholder="Deck title"
          onChangeText={this.handleTitleChange}
          value={this.state.title}
        />
        <TouchableOpacity style={styles.button} onPress={this.onEditDeck} accessibilityLabel="Create a new deck">
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    decks: state.decks,
    deck: state.decks.find(d => {
      if (d.key === ownProps.navigation.state.params.deck.key) {
        return d;
      }
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editDeck: (deck) => dispatch(editDeck(deck))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeck);
