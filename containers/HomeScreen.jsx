import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { ColorPalette } from '../constants/colorPalette'

import { connect } from 'react-redux'
import { sampleAction } from '../actions/fooActions'
import { sampleRestaurant } from '../constants/sampleQueryResponse'
import { ExploreDropdown } from '../components/ExploreDropdown'
import SafeAreaView from 'react-native-safe-area-view'

class HomeScreen extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>{this.props.sample.text}</Text>
				<Button
					title={this.props.sample.status.toString()}
					onPress={() => {
						this.props.dispatch(sampleAction())
					}}
				/>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorPalette.white,
		width: '100%',
		height: '100%',
	},
})

const mapStateToProps = store => {
	return {
		sample: store.sample,
	}
}

export default connect(mapStateToProps, undefined)(HomeScreen)
