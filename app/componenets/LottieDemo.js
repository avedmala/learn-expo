import React from 'react';
import {StyleSheet, View, StatusBar,} from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class LottieDemo extends React.Component {

    state = {
        animation: null,
    };

    componentWillMount() {
        this.playAnimation();
    }

    playAnimation = () => {
        if (!this.state.animation) {
            this.loadAnimationAsync();
        } else {
            this.animation.reset();
            this.animation.play();
        }
    };
    
    loadAnimationAsync = async () => {
        let result = await fetch(
            // try out any animation from here https://lottiefiles.com/popular
            'https://assets6.lottiefiles.com/datafiles/AembVTvov5PkTSJ/data.json'
        )
        .then(data => {
            return data.json();
        })
        .catch(error => {
            console.error(error);
        });
        this.setState({ animation: result }, this.playAnimation);
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='default'
                />
                {this.state.animation &&
                    <Lottie
                        ref={animation => {this.animation = animation;}}
                        source={this.state.animation}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#463268',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
