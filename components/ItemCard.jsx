import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';
import { TouchableHighlight } from 'react-native';

const ItemCard = ({ item }) => {
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
        flex: 1,
        padding: 15,
        elevation: 5,
        shadowColor: ColorPalette.black,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_text: {
        color: ColorPalette.black,
        fontSize: 18
    },
    description: {
        marginTop: 10,
    },
    description_text: {
        color: ColorPalette.black,
        fontSize: 12
    },
});

export default ItemCard