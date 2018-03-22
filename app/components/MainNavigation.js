import Decks from '../screens/Decks';
import Deck from '../screens/Deck';
import { StackNavigator } from 'react-navigation';
import TabNavigation from './TabNavigation';

const MainNavigation = StackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
      title: 'Decks'
    }
  },
  Deck: {
    screen: Deck,
  }
})

export default MainNavigation;
