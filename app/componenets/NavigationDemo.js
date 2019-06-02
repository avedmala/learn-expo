import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // https://reactnavigation.org/docs/en/getting-started.html
import TextInputDemo from './TextInputDemo';
import PickerDemo from './PickerDemo';
import AudioDemo from './AudioDemo';
import SpeechDemo from './SpeechDemo';
import GestureHandlerDemo from './GestureHandlerDemo';
import LottieDemo from './LottieDemo';
import HeaderDemo from './HeaderDemo';
class NavigationDemo extends React.Component {

  static navigationOptions = {
    title: 'NavigationDemo',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="TextInputDemo"
          onPress={() => this.props.navigation.navigate('TextInput')}
        />
        <Button
          title="PickerDemo"
          onPress={() => this.props.navigation.navigate('Picker')}
        />
        <Button
          title="AudioDemo"
          onPress={() => this.props.navigation.navigate('Audio')}
        />
        <Button
          title="SpeechDemo"
          onPress={() => this.props.navigation.navigate('Speech')}
        />
        <Button
          title="GestureHandlerDemo"
          onPress={() => this.props.navigation.navigate('GestureHandler')}
        />
        <Button
          title="LottieDemo"
          onPress={() => this.props.navigation.navigate('Lottie')}
        />
        <Button
          title="HeaderDemo"
          onPress={() => this.props.navigation.navigate('Header')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
    {
        Navigation: {
            screen: NavigationDemo,
        },
        TextInput: {
            screen: TextInputDemo,
        },
        Picker: {
            screen: PickerDemo,
        },
        Audio: {
            screen: AudioDemo,
        },
        Speech: {
            screen: SpeechDemo,
        },
        GestureHandler: {
            screen: GestureHandlerDemo,
        },
        Lottie: {
            screen: LottieDemo,
        },
        Header: {
          screen: HeaderDemo,
        },
    },
    {
        initialRouteName: 'Navigation',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}