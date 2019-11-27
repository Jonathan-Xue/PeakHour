import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { ColorPalette } from '../constants/colorPalette';

import { connect } from 'react-redux';
import { sampleAction } from '../actions/fooActions';
import { sampleRestaurant } from '../constants/sampleQueryResponse';
import { RestaurantCard } from '../components/RestaurantCard';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.sample.text}</Text>
                <Button
                    title={this.props.sample.status.toString()}
                    onPress={() => {
                        this.props.dispatch(sampleAction())
                    }}
                />

                <RestaurantCard restaurant = {sampleRestaurant}></RestaurantCard>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorPalette.white,
        flex: 1,
    },
});

const mapStateToProps = store => {
    return {
        sample: store.sample,
    }
};

export default connect(mapStateToProps, undefined)(HomeScreen);