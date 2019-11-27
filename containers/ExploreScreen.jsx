import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

import { connect } from 'react-redux';
import { ExploreDropdown } from '../components/ExploreDropdown';
import SafeAreaView from 'react-native-safe-area-view';

class ExploreScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<ExploreDropdown
						title="Sort"
						options={['Price', 'Popularity']}
						onPress={this._togglePicker}
					></ExploreDropdown>
					<ExploreDropdown
						title="Distance"
						options={['Super Close', 'Very Far', 'On the moon']}
						onPress={this._togglePicker}
					></ExploreDropdown>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorPalette.white,
		width: '100%',
		height: '100%',
	},
});

const mapStateToProps = store => {
	return {
		sample: store.sample,
	};
};

export default connect(mapStateToProps, undefined)(ExploreScreen);
