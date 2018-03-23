import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import PreviewCard from '../../components/PreviewCard'
import { connect } from 'react-redux';

class Decks extends React.Component {

  onSelectPreviewCard = (deck) => {
    this.props.navigation.navigate('Deck', { deck });
  }

  render() {
    return (<View style={styles.container}>

      {this.props.decks.length > 0
        ? (<FlatList data={this.props.decks} renderItem={({item}) => <PreviewCard deck={item} onPress={this.onSelectPreviewCard} />} />)
        : (<Text>No decks yet!</Text>)}
    </View>)
  }
}

function stateToProps(state) {
  return {
    decks: state
  }
}

export default connect(stateToProps)(Decks);
