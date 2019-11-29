import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { MaterialIcons } from '@expo/vector-icons';

export class SearchBar extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	};

	// Value Change
	onValueChange = (newValue) => {
		this.setState({ value : newValue });
	};

	render() {
		return (
			<View style={styles.container}>
                <MaterialIcons name={'search'} size={24} color={ColorPalette.grey}/>
                <TextInput
                    autoCorrect={false}
                    clearButtonMode='while-editing'
                    editable={true}
                    onChangeText={this.onValueChange}
                    placeholder='Search for restaurants...'
                    underlineColorAndroid='transparent'
                    value={this.state.value}
                    style={{...styles.search_bar, color: this.state.value == '' ? ColorPalette.grey : ColorPalette.black}}
                />
            </View>
		);
	};
};

const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
		backgroundColor: ColorPalette.white,
        borderColor: ColorPalette.grey,
        borderRadius: 100,
        borderWidth: 1,
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 15,
    },
    icon: {
        marginRight: 5,
    },
    search_bar: {
        flex: 1,
        fontSize: 18,
        marginLeft: 5,
    },
});