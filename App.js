import React, { Component } from 'react';
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Loginscreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgotPasswordScreen from './Screens/ResetPasswordScreen';

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  Login: { screen: Loginscreen },
  Signup: { screen: SignupScreen },
  ForgotPassword: { screen: ForgotPasswordScreen },
   Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
