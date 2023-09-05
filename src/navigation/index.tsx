// Import necessary modules and components
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

// RootNavigator is the top-level component responsible for navigation routing.
const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      {/* Conditional rendering: Display AuthNavigator or AppNavigator based on a condition */}
      {true ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
