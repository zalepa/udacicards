import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  results: {
    fontSize: 40,
    textAlign: 'center',
    margin: 15
  }
})

export default class Results extends React.Component {

  render() {

    const { cards, correct } = this.props.navigation.state.params;

    return (<View>
      <Text style={styles.results}>Cards: {cards}</Text>
      <Text style={styles.results}>Correct: {correct}</Text>
      <Text style={styles.results}>Incorrect: {cards - correct}</Text>
      <Text style={styles.results}>Percentage: {Math.round((correct/cards) * 100)}%</Text>
    </View>)
  }
}
