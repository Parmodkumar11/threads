// CustomInput.tsx

import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {COLORS} from '../utils/theme/colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

interface CustomInputProps extends TextInputProps {
  placeholder: string;
}

// CustomInput is a reusable component for text input fields with custom styling.
const CustomInput: React.FC<CustomInputProps> = ({placeholder, ...rest}) => {
  const [text, setText] = useState('');

  // handleChangeText is a function that updates the input text value.
  const handleChangeText = (inputText: string) => {
    setText(inputText);
  };

  return (
    // View serves as the container for the text input with custom styling.
    <View style={styles.inputContainer}>
      {/* TextInput component to display and handle user input */}
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={text}
        {...rest}
        placeholderTextColor={COLORS.WHITE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    marginBottom: scale(10),
    height: verticalScale(50),
    borderRadius: 10,
    justifyContent: 'center',
    padding: scale(2),
  },
});

export default CustomInput;
