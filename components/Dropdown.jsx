import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { MaterialIcons } from '@expo/vector-icons';

import { CustomPicker } from './CustomPicker';

export class Dropdown extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			showPicker: false,
			selectedValue: '',
		};
	};
	
	// Toggle 
	togglePicker = () => {
		this.setState({ showPicker: !this.state.showPicker });
	};

	// Value Change
	onValueChange = (newValue) => {
		if (newValue) {
			this.setState({ selectedValue: newValue == 'Default' ? '' : newValue });
		}
		
		this.setState({ showPicker: false });
	};

	render() {
		return (
			<TouchableOpacity onPress={() => this.togglePicker()}>
				<View style={styles.dropdown}>
					<Text>{ this.state.selectedValue ? this.state.selectedValue : this.props.title }</Text>
					<MaterialIcons name="keyboard-arrow-down" style={{marginLeft: 5}}/>
				</View>

				{ this.state.showPicker && <CustomPicker onPress={this.onValueChange} options={this.props.options}/> }
			</TouchableOpacity>
		);
	};
}

const styles = StyleSheet.create({
	dropdown: {
		alignItems: 'center',
		backgroundColor: ColorPalette.grey,
		borderRadius: 20,
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 10
	}
});