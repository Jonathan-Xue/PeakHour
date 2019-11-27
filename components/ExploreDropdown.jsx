import React from 'react'
import { View, Image, StyleSheet, Text, Picker } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ColorPalette } from '../constants/colorPalette'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export class ExploreDropdown extends React.Component {
	state = { showDropdown: false }

	_togglePicker = () => {
		this.setState({ showDropdown: !this.state.showDropdown })
	}

	render() {
		const { title, options } = this.props
		return (
			<View style={styles.container}>
				<Text onPress={() => this._togglePicker()}>{title}</Text>
				{this.state.showDropdown && (
					<Picker
						selectedValue={'Hello!'}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) =>
							console.log(itemValue)
						}
					>
						{options.map((option, index) => (
							<Picker.Item
								key={index}
								label={option}
								value={option}
							/>
						))}
					</Picker>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorPalette.orange,
		borderRadius: 10,
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	restaurantDetailsContainer: {
		flexDirection: 'row',
		width: '100%',
		position: 'absolute',
		bottom: 0,
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	restaurantNameText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: ColorPalette.white,
	},
	restaurantLocationText: {
		fontSize: 14,
		color: ColorPalette.white,
	},
	restaurantRatingText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: ColorPalette.orange,
	},
	textWithIconContainer: { flexDirection: 'row', alignItems: 'center' },
})
