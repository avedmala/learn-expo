import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert, Vibration} from 'react-native';

export default class TextInputDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    checkText() {
        Vibration.vibrate()
        if(this.state.text.replace(/\s/g,'') == '23456') {
            Alert.alert(
                'Success',
                'You entered the digits!',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
        else {
            Alert.alert(
                'Incorrect',
                'You are stupid!',
                [
                    // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'I am stupid', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )    
        }
    }

    static navigationOptions = {
        title: 'TextInputDemo',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Count forwards from 2 to 6!</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.text} 
                    keyboardType={'number-pad'}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={() => this.checkText()}
                />
                <Button
                    onPress={() => this.checkText()}
                    title={'Submit'}
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
        height: 40,
        width: 80,
        letterSpacing: 5,
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
});
