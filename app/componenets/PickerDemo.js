import React from 'react';
import {StyleSheet, Text, View, Picker,} from 'react-native';

export default class PickerDemo extends React.Component {

    constructor(props) {
        super (props);
        this.state = { pickerSelection: '...',}
    }

    setPickerValue(newValue) {
        this.setState({
            pickerSelection: newValue
        });

        if(newValue == 'May') {
            console.log('success')
        }
        else {
            console.log('fail')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>The date is May 6th, 2019</Text>
                <Text>The current month is {this.state.pickerSelection}</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.pickerSelection}
                    mode={'dropdown'}
                    onValueChange={(itemValue) => this.setPickerValue(itemValue)}>
                    <Picker.Item label="January" value="January" />
                    <Picker.Item label="February" value="February" />
                    <Picker.Item label="March" value="March" />
                    <Picker.Item label="April" value="April" />
                    <Picker.Item label="May" value="May" />
                    <Picker.Item label="June" value="June" />
                    <Picker.Item label="July" value="July" />
                    <Picker.Item label="August" value="August" />
                    <Picker.Item label="September" value="September" />
                    <Picker.Item label="October" value="October" />
                    <Picker.Item label="November" value="November" />
                    <Picker.Item label="December" value="December" />
                </Picker>
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
    picker: {
        backgroundColor: '#fafafa',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});