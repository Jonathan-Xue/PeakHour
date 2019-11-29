import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

import { connect } from 'react-redux';
import { Dropdown } from '../components/Dropdown';

class ExploreScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Dropdown title="Sort" options={['Default', 'Price', 'Popularity']} onPress={undefined}/>
					<Dropdown title="Distance" options={['Default', 'Super Close', 'Very Far', 'On the moon']} onPress={undefined}/>
				</View>
			</SafeAreaView>
		);
	};
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorPalette.white,
		flex: 1
	}
});

const mapStateToProps = store => {
	return {
		sample: store.sample,
	};
};

export default connect(mapStateToProps, undefined)(ExploreScreen);