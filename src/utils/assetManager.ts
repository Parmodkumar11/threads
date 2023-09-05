// Import the Platform module from React Native

import {Platform} from 'react-native';

// AssetManager is a utility class for managing assets such as images.
export class AssetManager {
  static Images = {}; // A placeholder for storing image assets

  // isIos is a static method that checks if the current platform is iOS.
  static isIos() {
    return Platform.OS === 'ios'; // Returns true if the platform is iOS, otherwise false
  }
}
