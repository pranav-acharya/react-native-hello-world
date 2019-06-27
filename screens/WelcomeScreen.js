import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomeComponent from '../components/WelcomeComponent';

// functional component(screen) which reuses a component
const WelcomeScreen = () => <WelcomeComponent />;

export default WelcomeScreen;
