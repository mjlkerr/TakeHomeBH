import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import createStore from './src/index';

import CalculateScreen from './src/calculate/components/CalculateScreen';

const App = props => {
  const store = createStore();
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
