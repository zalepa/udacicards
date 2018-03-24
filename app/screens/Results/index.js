import React from 'react';
import { Text, View} from 'react-native';

export default class Results extends React.Component {

  render() {

    const { cards, correct } = this.props.navigation.state.params;

    return (<View>
      <Text>Results!</Text>
      <Text>Cards: {cards}</Text>
      <Text>Correct: {correct}</Text>
      <Text>Incorrect: {cards - correct}</Text>
      <Text>Percentage: {(correct/cards) * 100}%</Text>
    </View>)
  }
}
