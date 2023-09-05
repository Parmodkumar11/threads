// CustomText.tsx

import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';

interface CustomTextProps extends TextProps {
  style?: TextStyle;
  children: React.ReactNode;
}

// CustomText is a reusable component for displaying text with custom styles.
const CustomText: React.FC<CustomTextProps> = ({
  style,
  children,
  ...restProps
}) => {
  return (
    // Text component to display text with optional custom styling
    <Text style={[styles.customText, style]} {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  customText: {
    // Define your custom text styles here
  },
});

export default CustomText;
