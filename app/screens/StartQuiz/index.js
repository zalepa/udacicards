import React from 'react';
import {Button, Text, View} from 'react-native';
import { connect } from 'react-redux';

class StartQuiz extends React.Component {

  render() {
    return (<View>
      <Text>Start Quiz...</Text>
    </View>)
  }
}

function stateToProps(state, ownProps) {
  return {
    deck: ownProps.navigation.state.params.deck
  }
}

export default connect(stateToProps)(StartQuiz);
