import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './containers/HomeScreen';
import ExploreScreen from './containers/ExploreScreen';

const AppNavigator = createBottomTabNavigator({
	Explore: ExploreScreen,
	Home: HomeScreen,
});

export default createAppContainer(AppNavigator);