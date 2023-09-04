// Import necessary modules and components
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      {true ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
