// AppNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {AuthScreens} from '../utils/AuthScreens';

const Stack = createNativeStackNavigator();

// AppNavigator is a component that handles the navigation for the main app screens.
const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      {/* This Stack.Screen represents the Home screen */}
      <Stack.Screen name={AuthScreens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
