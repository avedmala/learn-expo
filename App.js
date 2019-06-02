import React from 'react';
import TextInputDemo from './app/componenets/TextInputDemo';
import PickerDemo from './app/componenets/PickerDemo';
import AudioDemo from './app/componenets/AudioDemo';
import SpeechDemo from './app/componenets/SpeechDemo';
import GestureHandlerDemo from './app/componenets/GestureHandlerDemo';
import LottieDemo from './app/componenets/LottieDemo';
import VibrationDemo from './app/componenets/VibrationDemo';
import NavigationDemo from './app/componenets/NavigationDemo';

export default class App extends React.Component {
  render() {
    return (
      // uncomment the demo you want to use
      // may only use one at a time
      
      // <TextInputDemo/>
      // <PickerDemo/>
      // <AudioDemo/>
      // <SpeechDemo/>
      // <GestureHandlerDemo/>
      // <LottieDemo/>
      // <VibrationDemo/>
      <NavigationDemo/>
    );
  }
}