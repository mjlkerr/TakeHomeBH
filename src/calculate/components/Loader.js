import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {default as LoaderStyles} from './styles/LoaderStyles';

const Loader = props => {
  return (
    <View style={[LoaderStyles.container, LoaderStyles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;
