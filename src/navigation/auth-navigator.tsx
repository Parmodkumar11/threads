// AuthNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {AuthScreens} from '../utils/AuthScreens';

const Stack = createNativeStackNavigator();

// AuthNavigator is a component that handles the navigation for authentication screens.
const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* This Stack.Screen represents the Login screen */}
      <Stack.Screen name={AuthScreens.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
