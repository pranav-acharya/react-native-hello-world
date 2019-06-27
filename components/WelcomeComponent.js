import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomeComponent extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is a welcome screen</Text>
      </View>
    );
  }
}

export default WelcomeComponent;