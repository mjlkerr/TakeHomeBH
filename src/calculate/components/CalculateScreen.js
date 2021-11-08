import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Dropdown from './Dropdown';
import {populateDropDowns} from '../actions/populateDropDowns';

const CalculateScreen = props => {
  const {populateDropDowns, times} = props;
  useEffect(() => {
    populateDropDowns();
  }, [populateDropDowns]);
  if (times) {
    return (
      <View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Big Health Take Home Test</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Dropdown times={times} />
        </View>
        <View style={styles.sectionContainer}>
          <Dropdown times={times} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
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

const mapDispatchToProps = dispatch => ({
  populateDropDowns: () => dispatch(populateDropDowns()),
});

const mapStateToProps = ({calculate}) => ({
  possible: calculate.possible,
  times: calculate.times,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen);
