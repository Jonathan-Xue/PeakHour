import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

export const ItemCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>{item.name}</Text>
                <Text style={styles.header_text}>${item.price}</Text>
            </View>
            
            {(item.description != "" || item.image != "") && <View style={styles.description}>
                <Text style={styles.description_text}>{item.description}</Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.white,
        padding: 15,
        elevation: 5,
        shadowColor: ColorPalette.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header_text: {
        color: ColorPalette.black,
        fontSize: 18,
    },
    description: {
        marginTop: 10,
    },
    description_text: {
        color: ColorPalette.black,
        fontSize: 12,
    },
});