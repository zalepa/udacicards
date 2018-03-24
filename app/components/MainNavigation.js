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
      title: 'My Decks',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'tomato',
        height: 52
      }
    }
  },

  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'tomato',
        height: 52
      }
    }
  },

  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'tomato',
        height: 52
      }
    }
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Start Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'tomato',
        height: 52
      }
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      title: 'Results',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'tomato',
        height: 52
      }
    }
  }
})

export default MainNavigation;
