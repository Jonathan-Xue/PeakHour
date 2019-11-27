import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './containers/HomeScreen'

const AppNavigator = createBottomTabNavigator({
	Home: HomeScreen,
})

export default createAppContainer(AppNavigator)
