// AppNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {AuthScreens} from '../utils/AuthScreens';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthScreens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
