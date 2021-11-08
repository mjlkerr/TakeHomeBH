import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {default as CalculateButtonStyles} from './styles/CalculateButtonStyles';

const {calculateButton, buttonText} = CalculateButtonStyles;

const CalculateButton = props => {
  return (
    <Pressable style={calculateButton}>
      <Text style={buttonText}>Calculate</Text>
    </Pressable>
  );
};

export default CalculateButton;
