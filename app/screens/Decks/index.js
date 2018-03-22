import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import PreviewCard from '../../components/PreviewCard'

export default class Decks extends React.Component {

  data = [
    {key: 0, title: 'Udacicard', size: 3},
    {key: 1, title: 'New List', size: 10},
    {key: 2, title: 'New List 2', size: 100},
  ]

  onSelectPreviewCard = () => {
    this.props.navigation.navigate('Deck');
  }

  render() {
    return (<View style={styles.container}>
      <FlatList
        data={this.data}
        renderItem={({item}) => <PreviewCard {...item} onPress={this.onSelectPreviewCard} />}
      />
    </View>)
  }
}
