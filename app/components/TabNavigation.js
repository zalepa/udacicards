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
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-list-outline' size={30} color={tintColor}/>
    }
  },
  New: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-add' color={tintColor} size={30}/>
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#B21B00',
    style: {
      backgroundColor: 'tomato',
      height: 60,
      paddingBottom: 5
    },
    labelStyle: {
      fontSize: 12,
    },
  }
})

export default TabNavigation;
