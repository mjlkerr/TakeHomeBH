import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Dropdown from './src/components/Dropdown';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.savContainer}>
      <View
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.sectionTitle}>Big Health Take Home Test</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Dropdown />
        </View>
        <View style={styles.sectionContainer}>
          <Dropdown />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  savContainer: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
