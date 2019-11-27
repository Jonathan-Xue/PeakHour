import React from 'react';
import { Animated, View, StyleSheet, Text, Modal } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DURATION = 200;

export class CustomPicker extends React.Component {
	state = {
		selectedValue: '',
		height: new Animated.Value(0),
		opacity: new Animated.Value(0),
	};

	_togglePicker = () => {
		this.setState({ showDropdown: !this.state.showDropdown });
	};

	_onValueChange = newValue => {
		this.setState({ ...this.state, selectedValue: newValue });
	};

	_show = () => {
		Animated.parallel([
			Animated.timing(this.state.height, {
				toValue: 1,
				duration: DURATION,
			}),
			Animated.timing(this.state.opacity, {
				toValue: 100,
				duration: DURATION,
			}),
		]).start();
	};

	_hide = (callback, param) => {
		Animated.parallel([
			Animated.timing(this.state.height, {
				toValue: 0,
				duration: DURATION,
			}),
			Animated.timing(this.state.opacity, {
				toValue: 0,
				duration: DURATION,
			}),
		]).start(() => callback(param));
	};

	componentDidMount() {
		this._show();
	}

	render() {
		const { options, onPress } = this.props;

		const height = this.state.height.interpolate({
			inputRange: [0, 1],
			outputRange: ['0%', '40%'],
		});

		return (
			<Modal transparent>
				<Animated.View
					style={{
						...styles.backgroundDimContainer,
						opacity: this.state.opacity,
					}}
				>
					<TouchableOpacity onPress={() => this._hide(onPress, null)}>
						<View style={styles.fill}></View>
					</TouchableOpacity>
				</Animated.View>

				<Animated.View
					style={{ ...styles.contentContainer, height: height }}
				>
					{options.map((option, index) => (
						<View key={index} style={styles.optionContainer}>
							<TouchableOpacity
								onPress={() => this._hide(onPress, option)}
							>
								<Text>{option}</Text>
							</TouchableOpacity>
						</View>
					))}
				</Animated.View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		width: '100%',
		backgroundColor: ColorPalette.white,
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
	},
	backgroundDimContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: '#000A',
	},
	fill: {
		width: '100%',
		height: '100%',
	},
	optionContainer: {
		padding: 20,
		width: '100%',
		borderBottomWidth: 1,
	},
});
