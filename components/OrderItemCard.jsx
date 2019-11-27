import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

export const OrderItemCard = ({ item, editable }) => {
    // TODO: Replace With OnPress Function
    const onPress = (elementName) => {
        alert(elementName + ' Pressed');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>{item.name} (x{item.quantity})</Text>
                <Text style={styles.header_text}>${item.unit_price*item.quantity}</Text>
            </View>
            
            <Text style={styles.additional_information}>{item.additional_information}</Text>
            { editable && <View style={styles.interactive_text_container}>
                <Text style={{...styles.interactive_text}} onPress={() => { onPress("Edit") }}>Edit</Text>
                <Text style={styles.interactive_text} onPress={() => { onPress("Remove") }}>Remove</Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_text: {
        color: ColorPalette.black,
        fontSize: 18
    },
    additional_information: {
        color: ColorPalette.black,
        fontSize: 12,
        marginTop: 5
    },
    interactive_text_container: {
        flexDirection: 'row',
        marginTop: 5
    },
    interactive_text: {
        color: ColorPalette.orange,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
		textDecorationLine: 'underline'
    }
});