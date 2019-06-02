import React from 'react';
import {StyleSheet, View, Button, Vibration} from 'react-native';
import { Haptic } from 'expo';


export default class VibrationDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => Vibration.vibrate()}
                    title={'Vibrate'}
                />
                <Button
                    onPress={() => Haptic.impact(Haptic.ImpactFeedbackStyle.Light)}
                    title={'Haptic'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
