import React from 'react';
import {Button, Text, View} from 'react-native';
import { connect } from 'react-redux';

class AddCard extends React.Component {

  render() {
    return (<View>
      <Text>Add Card...</Text>
    </View>)
  }
}

function stateToProps(state, ownProps) {
  return {
    deck: ownProps.navigation.state.params.deck
  }
}

export default connect(stateToProps)(AddCard);
