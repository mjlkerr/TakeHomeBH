import React from 'react';
import {Pressable, Text} from 'react-native';
import {default as CalculateButtonStyles} from './styles/CalculateButtonStyles';

const {calculateButton, buttonText} = CalculateButtonStyles;

const CalculateButton = props => {
  const {disabled, onPress} = props;
  const color = disabled ? '#ADA0A6' : '#6BAB90';
  return (
    <Pressable
      style={[calculateButton, {backgroundColor: color}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={buttonText}>Calculate</Text>
    </Pressable>
  );
};

export default CalculateButton;
