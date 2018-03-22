import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import PreviewCard from '../../components/PreviewCard'
import { connect } from 'react-redux';

class Decks extends React.Component {

  onSelectPreviewCard = () => {
    this.props.navigation.navigate('Deck');
  }

  render() {
    return (<View style={styles.container}>
      <FlatList
        data={this.props.decks}
        renderItem={({item}) => <PreviewCard deck={item} onPress={this.onSelectPreviewCard} />}
      />
    </View>)
  }
}

function stateToProps(state) {
  return {
    decks: state
  }
}

export default connect(stateToProps)(Decks);
