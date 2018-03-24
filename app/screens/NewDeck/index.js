import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { createDeck } from '../../actions';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 10,
    fontSize: 22
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

class NewDeck extends React.Component {

  state = {
    title: ''
  }

  componentDidMount = () => {
    this.setState({title: ''});
  }

  handleTitleChange = (title) => {
    this.setState({title})
  }

  onCreateNewDeck = () => {

  if (!this.state.title) return;

    const deck = {
      title: this.state.title,
      cards: []
    }


    this.props.dispatch(createDeck(deck));
    this.setState({ title: '' });
    this.props.navigation.navigate('Home');
  }

  render() {
    return (<View>
      <TextInput
        style={styles.formInput}
        placeholder="Deck title"
        onChangeText={this.handleTitleChange}
        value={this.state.title}
      />
      <TouchableOpacity style={styles.button} onPress={this.onCreateNewDeck} accessibilityLabel="Create a new deck">
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>)
  }
}

export default connect()(NewDeck);
