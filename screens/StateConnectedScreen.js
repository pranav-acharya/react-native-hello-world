import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { dummyAction } from '../actions';

class StateConnectedScreen extends Component {
  componentWillMount() {
    this.props.dummyAction();
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This screen is connected to the redux store</Text>
        <Text>{this.props.auth}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps,{
  dummyAction
})(StateConnectedScreen);