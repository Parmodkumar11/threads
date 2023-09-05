import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../utils/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string; // Allow passing a custom background color
}

// Container is a reusable component for creating a container with customizable background color.
const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor = COLORS.BLACK, // Default background color is black
}) => {
  return (
    // SafeAreaView ensures content is not obscured by notches or device-specific elements
    <SafeAreaView style={{flex: 1, backgroundColor}}>
      {/* The View component serves as the main content container */}
      <View style={[styles.container, {backgroundColor}]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(20), // Apply scaling to marginHorizontal
  },
});

export default Container;
