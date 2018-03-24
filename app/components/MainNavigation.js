import Decks from '../screens/Decks';
import Deck from '../screens/Deck';
import AddCard from '../screens/AddCard';
import StartQuiz from '../screens/StartQuiz';
import Results from '../screens/Results';
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
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card'
    }
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Start Quiz'
    }
  },
  Results: {
    screen: Results
  }
})

export default MainNavigation;
