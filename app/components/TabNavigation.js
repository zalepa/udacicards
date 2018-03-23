import React from 'react';
import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';
import { TabNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

const TabNavigation = TabNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks',
      tabBarIcon: () => <Ionicons name='ios-list-outline' size={30}/>
    }
  },
  New: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name='ios-add' size={30}/>
    }
  }
})

export default TabNavigation;
