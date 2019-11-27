import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const RestaurantCard = ({ restaurant }) => {
	return (
		<View style={styles.container}>
			<Image resizeMode='cover' source={restaurant.image} style={styles.image}/>
			<LinearGradient colors={['transparent', '#41414199', '#0E0E0E99']} style={styles.gradient}/>
			<View style={styles.restaurantDetailsContainer}>
				<View>
					<Text style={styles.restaurantNameText}>{restaurant.name}</Text>
					<Text style={styles.restaurantLocationText}>{restaurant.address}<MaterialIcons name='location-on' size={16} color={ColorPalette.white}/></Text>
				</View>

				<Text style={styles.restaurantRatingText}>{restaurant.rating}<MaterialIcons name='star' size={16} color={ColorPalette.orange}/></Text>	
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: ColorPalette.orange,
		borderRadius: 10,
		height: 200,
		width: '90%'
	},
	image: {
		borderRadius: 10,
		height: '100%',
		width: '100%'
	},
	gradient: {
		borderRadius: 10,
		height: '100%',
		width: '100%',

		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
	restaurantDetailsContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		width: '100%',

		position: 'absolute',
		bottom: 0
	},
	restaurantNameText: {
		color: ColorPalette.white,
		fontSize: 18,
		fontWeight: 'bold'
	},
	restaurantLocationText: {
		color: ColorPalette.white,
		fontSize: 14
	},
	restaurantRatingText: {
		color: ColorPalette.orange,
		fontSize: 18,
		fontWeight: 'bold'
	}
});
