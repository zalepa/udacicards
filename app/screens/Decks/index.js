import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import PreviewCard from '../../components/PreviewCard'
import { connect } from 'react-redux';

class Decks extends React.Component {
  renderCard = ({item}) => {
    return <PreviewCard deck={item} onPress={this.props.gotoDeck} />
  }

  render() {
    const {decks} = this.props;
    return (
      <View style={styles.container}>
        {decks.length > 0
          ? (<FlatList data={decks} renderItem={this.renderCard} />)
          : (<Text style={styles.noDecks}>No decks yet!</Text>)}
      </View>
    )
  }
}

function stateToProps(state, ownProps) {
  return {
    decks: state.decks,
    gotoDeck: (deck) => {
      ownProps.navigation.navigate('Deck', { deck });
    }
  }
}

export default connect(stateToProps)(Decks);
