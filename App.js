import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import createStore from './src/index';

import CalculateScreen from './src/calculate/components/CalculateScreen';

const App = props => {
  const store = createStore();
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#EFF7DE', height: '100%'}}>
        <View contentInsetAdjustmentBehavior="automatic">
          <CalculateScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
