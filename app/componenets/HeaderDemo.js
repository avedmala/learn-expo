import React from 'react';
import {StyleSheet, View, StatusBar, Button} from 'react-native';
import { DangerZone } from 'expo';

export default class HeaderDemo extends React.Component {

    static navigationOptions = {
        title: 'HeaderDemo',
        headerStyle: {
            backgroundColor: '#0000FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#FFC0CB"
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
