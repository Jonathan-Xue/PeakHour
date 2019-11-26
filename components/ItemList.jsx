import React from 'react';
import { StyleSheet, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

import ItemCard from './ItemCard';

const ItemList = ({ restaurantMenu }) => {
    // TODO: Replace With OnPress Function
    const onPress = (item) => {
        alert(item.name + ' Selected');
    }

    return (
        <SectionList
            sections={
                Object.keys(restaurantMenu).map((key) => ({
                    title: key, 
                    data: restaurantMenu[key]
                }))
            }
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => { onPress(item) }}>
                    <ItemCard item={item}/>
                </TouchableOpacity>
            )}
            ref={ref => (this.sectionListRef = ref)}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: ColorPalette.orange,
        color: ColorPalette.white,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingVertical: 10
    },
    card: {
        marginHorizontal: 10,
        marginVertical: 7.5
    }
});

export default ItemList;