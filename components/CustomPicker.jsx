import React from 'react';
import { Animated, Modal, StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DURATION = 250;

export class CustomPicker extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: '',
			height: new Animated.Value(0),
			opacity: new Animated.Value(0),
		};
	};

	// Lifecycle Methods
	componentDidMount() {
		this.show();
	}

	// Show CustomPicker
	show = () => {
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

	// Hide CustomPicker
	hide = (callback, param) => {
		Animated.parallel([
			Animated.timing(this.state.height, {
				toValue: 0,
				duration: DURATION,
			}),
			Animated.timing(this.state.opacity, {
				toValue: 0,
				duration: DURATION,
			}),
		]).start(() => {
			callback(param);
		});
	};

	render() {
		const height = this.state.height.interpolate({
			inputRange: [0, 1],
			outputRange: ['0%', '40%'],
		});

		return (
			<Modal transparent={true}>
				<Animated.View style={{...styles.backgroundContainer, opacity: this.state.opacity }}>
					<TouchableOpacity onPress={() => this.hide(this.props.onPress, null)} style={styles.background}/>
				</Animated.View>

				<Animated.View style={{ ...styles.optionsContainer, height: height }}>
					{this.props.options.map((option, index) => (
						<View key={index} style={styles.option}>
							<TouchableOpacity onPress={() => this.hide(this.props.onPress, option)}>
								<Text>{option}</Text>
							</TouchableOpacity>
						</View>
					))}
				</Animated.View>
			</Modal>
		);
	};
}

const styles = StyleSheet.create({
	backgroundContainer: {
		backgroundColor: '#000000aa',
	},
	background: {
		height: '100%',
		width: '100%'
	},
	optionsContainer: {
		alignItems: 'center',
		backgroundColor: ColorPalette.white,
		width: '100%',

		position: 'absolute',
		bottom: 0
	},
	option: {
		borderBottomColor: ColorPalette.black,
		borderBottomWidth: 1,
		padding: 20,
		width: '100%'
	}
});