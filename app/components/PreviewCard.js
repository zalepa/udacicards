import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const PreviewCard = ({deck, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(deck)}>
      <View style={styles.card}>
        <MaterialCommunityIcons style={styles.icon}
                                name='cards-variant'
                                size={30}/>
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.headerText}>{deck.title}</Text>
        </View>
        <View style={styles.size}>
          <Text style={styles.sizeText}>({deck.cards.length} cards)</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 15,
  },

  icon: {
    padding: 5,
    paddingLeft: 8,
    textAlign: 'center'
  },
  headerText: {
    fontSize: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  size: {
    justifyContent: 'center',
  },
  sizeText: {
    color: '#afafaf',
    fontSize: 15,
    fontStyle: 'italic',
    padding: 5,
    paddingRight: 7,
  },
});

export default PreviewCard;
