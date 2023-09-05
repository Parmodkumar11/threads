// CustomImage.tsx

import React from 'react';
import {Image, ImageProps, StyleSheet, View} from 'react-native';

interface CustomImageProps extends ImageProps {
  customStyle?: any; // You can specify additional custom props as needed
}

// CustomImage is a reusable component for displaying images with custom styles.
const CustomImage: React.FC<CustomImageProps> = ({
  customStyle,
  ...restProps
}) => {
  return (
    // View serves as the container for the image with optional custom styling
    <View style={[styles.container, customStyle]}>
      {/* Image component to display the image */}
      <Image {...restProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any custom styling for the image container here
  },
});

export default CustomImage;
