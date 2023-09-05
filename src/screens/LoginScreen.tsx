import React, {useState} from 'react';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import {COLORS} from '../utils/theme/colors';
import {fontSizes} from '../utils/typography';
import CustomText from '../components/CustomText';

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <CustomText
        style={{
          color: COLORS.WHITE,
          fontSize: fontSizes.FONT_SIZE_16,
        }}>
        Custom Text Component
      </CustomText>

      <CustomInput
        style={{color: COLORS.WHITE}}
        placeholder="Username,email or moblie number"
      />
    </Container>
  );
};

export default LoginScreen;
