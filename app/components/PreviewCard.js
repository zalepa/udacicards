import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const PreviewCard = ({deck, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(deck)}>
      <View style={styles.card}>
      <Text style={styles.header}>
        <MaterialCommunityIcons style={styles.icon} name='cards-variant' size={25}/>
        <Text>{deck.title}</Text>
      </Text>
      <Text style={styles.size}>{deck.cards.length} cards</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  size: {
    textAlign: 'center'
  }
});

export default PreviewCard;
