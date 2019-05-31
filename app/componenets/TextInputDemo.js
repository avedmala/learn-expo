import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default class TextInputDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    checkText() {
        if(this.state.text.replace(/\s/g,'') == '23456') {
            console.log('success')
        }
        else {
            console.log('fail')
        }
    }

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
