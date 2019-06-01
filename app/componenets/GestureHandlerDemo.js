import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {PanGestureHandler, PinchGestureHandler, RotationGestureHandler, State} from 'react-native-gesture-handler';
// https://kmagiera.github.io/react-native-gesture-handler/

export default class GestureHandlerDemo extends React.Component {

    panRef = React.createRef();
    rotationRef = React.createRef();
    pinchRef = React.createRef();
    constructor(props) {
      super(props);
  
      /* Pinching */
      this.baseScale = new Animated.Value(1);
      this.pinchScale = new Animated.Value(1);
      this.scale = Animated.multiply(this.baseScale, this.pinchScale);
      this.lastScale = 1;
      this.onPinchGestureEvent = Animated.event(
        [{ nativeEvent: { scale: this.pinchScale } }],
      );
  
      /* Rotation */
      this.rotate = new Animated.Value(0);
      this.rotateStr = this.rotate.interpolate({
        inputRange: [-100, 100],
        outputRange: ['-100rad', '100rad'],
      });
      this.lastRotate = 0;
      this.onRotateGestureEvent = Animated.event(
        [{ nativeEvent: { rotation: this.rotate } }],
      );
  
      /* Tilt */
      this.tilt = new Animated.Value(0);
      this.tiltStr = this.tilt.interpolate({
        inputRange: [-501, -500, 0, 1],
        outputRange: ['1rad', '1rad', '0rad', '0rad'],
      });
      this.lastTilt = 0;
      this.onTiltGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: this.tilt } }],
      );
    }
  
    onRotateHandlerStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        this.lastRotate += event.nativeEvent.rotation;
        this.rotate.setOffset(this.lastRotate);
        this.rotate.setValue(0);
      }
    };
    onPinchHandlerStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        this.lastScale *= event.nativeEvent.scale;
        this.baseScale.setValue(this.lastScale);
        this.pinchScale.setValue(1);
      }
    };
    onTiltGestureStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        this.lastTilt += event.nativeEvent.translationY;
        this.tilt.setOffset(this.lastTilt);
        this.tilt.setValue(0);
      }
  };

    render() {
        return (
            <View style={styles.container}>
                {/* <PanGestureHandler
                    onGestureEvent={this.onTiltGestureEvent}
                    onHandlerStateChange={this.onTiltGestureStateChange}>
                    <Animated.Image
                        style={[
                        styles.pinchableImage,
                        {
                            transform: [
                            { perspective: 200 },
                            { rotate: this.rotateStr },
                            { rotateX: this.tiltStr },
                            ],
                        }]}
                        source={require('../../assets/cognitive.png')}
                    />
                </PanGestureHandler>
                <PinchGestureHandler
                    onGestureEvent={this.onPinchGestureEvent}
                    onHandlerStateChange={this.onPinchHandlerStateChange}>
                    <Animated.Image
                        style={[
                        styles.pinchableImage,
                        {
                            transform: [
                            { perspective: 200 },
                            { scale: this.scale },
                            ],
                        }]}
                        source={require('../../assets/cognitive.png')}
                    />
                </PinchGestureHandler>
                <RotationGestureHandler
                    onGestureEvent={this.onRotateGestureEvent}
                    onHandlerStateChange={this.onRotateHandlerStateChange}>
                    <Animated.Image
                        style={[
                        styles.pinchableImage,
                        {
                            transform: [
                            { perspective: 200 },
                            { rotate: this.rotateStr },
                            ],
                        }]}
                        source={require('../../assets/cognitive.png')}
                    />
                </RotationGestureHandler> */}
                <RotationGestureHandler
                    onGestureEvent={this.onRotateGestureEvent}
                    onHandlerStateChange={this.onRotateHandlerStateChange}>
                    <PinchGestureHandler
                        onGestureEvent={this.onPinchGestureEvent}
                        onHandlerStateChange={this.onPinchHandlerStateChange}>
                        <Animated.Image
                            style={[
                            styles.pinchableImage,
                            {
                                transform: [
                                { perspective: 200 },
                                { scale: this.scale },
                                { rotate: this.rotateStr },
                                ],
                            }]}
                            source={require('../../assets/cognitive.png')}
                        />
                    </PinchGestureHandler>
                </RotationGestureHandler>
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
    pinchableImage: {
        width: 150,
        height: 150,
    },
});
