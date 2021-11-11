import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {default as CalculateButtonStyles} from './styles/CalculateButtonStyles';

const {calculateButton, calculateButtonDisabled, buttonText} =
  CalculateButtonStyles;

const CalculateButton = props => {
  const {enabled, onPress} = props;
  const buttonStyle = enabled ? calculateButton : calculateButtonDisabled;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={buttonText}>Calculate</Text>
    </Pressable>
  );
};

export default CalculateButton;
