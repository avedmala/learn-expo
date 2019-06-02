import React from 'react';
import {StyleSheet, Button, View,} from 'react-native';
import {Audio} from 'expo';

export default class AudioDemo extends React.Component {

    constructor(props) {
        super (props);
        this.sound = null;
        this.state = {
            isPlaying: false,
            shouldPlay: false,
        }  
    }

    componentDidMount() {
        (async () => {
            this.sound = new Audio.Sound();
            try {
                await this.sound.loadAsync(require('../../assets/music.mp3'));
            } catch (error) {
                // An error occurred!
            }
        })();
    }

    componentWillUnmount() {
        this.sound.stopAsync();
    }

    onPlayPausePressed = () => {
        if (this.sound != null) {
          if (this.state.isPlaying) {
            this.sound.pauseAsync();
            this.setState({ isPlaying: false });
          } else {
            this.sound.playAsync();
            this.setState({ isPlaying: true });
          }
        }
    };

    onRestartPressed = () => {
        if (this.sound != null) {
            this.sound.replayAsync();
        }
    };

    onStopPressed = () => {
        if (this.sound != null) {
          this.sound.stopAsync();
          this.setState({ isPlaying: false });
        }
    };

    static navigationOptions = {
        title: 'AudioDemo',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onPlayPausePressed}
                    title={'Play/ Pause Music'}
                />
                <Button
                    onPress={this.onRestartPressed}
                    title={'Restart Music'}
                />
                <Button
                    onPress={this.onStopPressed}
                    title={'Stop Music'}
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