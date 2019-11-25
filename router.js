import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './containers/HomeScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    }, { 
        initialRouteName: 'Home' 
    }
);

export default createAppContainer(AppNavigator);