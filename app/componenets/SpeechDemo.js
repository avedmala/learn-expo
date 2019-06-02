import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import { Speech } from 'expo';


export default class SpeechDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: 'You are useless and nobody likes you' };
    }

    static navigationOptions = {
        title: 'SpeechDemo',
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.text} 
                    multiline = {true}
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    onPress={() => Speech.speak(this.state.text)}
                    title={'Speak Text'}
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
    textInput: {
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
});
