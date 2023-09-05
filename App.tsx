// Import necessary modules and components
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/navigation';

// Create a stack navigator instance
const Stack = createNativeStackNavigator();

// App is the main entry point of the application.
function App() {
  // Render the RootNavigator component, which manages the app's navigation.
  return <RootNavigator />;
}

export default App;
