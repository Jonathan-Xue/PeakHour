import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { sampleAction } from '../actions/fooActions';

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
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = store => {
    return {
      sample: store.sample,
    }
}

export default connect(mapStateToProps, undefined)(HomeScreen);