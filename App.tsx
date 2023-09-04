// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/navigation';

const Stack = createNativeStackNavigator();

function App() {
  return <RootNavigator />;
}

export default App;
