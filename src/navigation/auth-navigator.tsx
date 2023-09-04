// AuthNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {AuthScreens} from '../utils/AuthScreens';

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthScreens.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
