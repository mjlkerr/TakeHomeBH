import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import createStore from './src/index';

import CalculateScreen from './src/calculate/components/CalculateScreen';
import TestScreen from './src/calculate/components/TestScreen';

const App = props => {
  const store = createStore();
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#EFF7DE', height: '100%'}}>
        <View contentInsetAdjustmentBehavior="automatic">
          <TestScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
