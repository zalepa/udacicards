import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';
import { TabNavigator } from 'react-navigation';

const TabNavigation = TabNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks'
    }
  },
  New: {
    screen: NewDeck,
  }
})

export default TabNavigation;
