import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/*
    login-variant : Order Received
    food : Preparing
    receipt : Order Ready
*/
export const OrderProgressIcon = ({ iconName, iconLabel, active }) => {
    return (
        <View style={styles.container}>
            {<MaterialCommunityIcons name={iconName} size={active ? 132 : 60} color={active ? ColorPalette.orange : ColorPalette.black} style={styles.icon}/>}
            <Text style={{...styles.iconLabel, color: active ? ColorPalette.orange : ColorPalette.black}}>{iconLabel}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        textAlign: 'center',
    },
	iconLabel: {
		fontSize: 18,
        textAlign: 'center'
	}
});