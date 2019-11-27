import React from 'react';
import { View, Button, Image, StyleSheet, Text, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ColorPalette } from '../constants/colorPalette';
import { MaterialIcons } from '@expo/vector-icons';
import { CustomPicker } from './CustomPicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class ExploreDropdown extends React.Component {
	state = {
		showDropdown: false,
		selectedValue: '',
	};

	_togglePicker = () => {
		this.setState({ showDropdown: !this.state.showDropdown });
	};

	_hidePicker = () => {
		this.setState({ showDropdown: false });
	};

	_onValueChange = newValue => {
		this.setState({ selectedValue: newValue });
	};

	_clear = () => {
		this.setState({ selectedValue: '' });
	};

	_onValueChange = newValue => {
		if (newValue != null) this.setState({ selectedValue: newValue });
		this._hidePicker();
	};

	render() {
		const { title, options, onPress } = this.props;
		const buttonValue = this.state.selectedValue
			? this.state.selectedValue
			: title;
		const buttonIcon = this.state.selectedValue ? (
			<MaterialIcons name="close"></MaterialIcons>
		) : (
			<MaterialIcons name="keyboard-arrow-down"></MaterialIcons>
		);

		return (
			<View style={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingVertical: 10,
						paddingHorizontal: 15,
						backgroundColor: '#DDD',
						borderRadius: 20,
					}}
				>
					<TouchableOpacity onPress={() => this._togglePicker()}>
						<Text>{buttonValue}</Text>
					</TouchableOpacity>

					<View style={{ marginLeft: 10 }}>
						<TouchableOpacity
							onPress={() => {
								this.state.selectedValue
									? this._clear()
									: this._togglePicker();
							}}
						>
							{buttonIcon}
						</TouchableOpacity>
					</View>
				</View>

				{this.state.showDropdown == true && (
					<CustomPicker
						visible={this.state.showDropdown}
						onPress={this._onValueChange}
						options={options}
					></CustomPicker>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: ColorPalette.white,
		flex: 1,
		justifyContent: 'center',
	},
});
