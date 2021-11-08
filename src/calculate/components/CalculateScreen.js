import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import Dropdown from './Dropdown';
import CalculateButton from './CalculateButton';
import {populateDropDowns} from '../actions/populateDropDowns';
import {setMinutes} from '../actions/setMinutes';

const CalculateScreen = props => {
  const {
    populateDropDowns,
    times,
    setMinutes,
    minutesAsleep,
    minutesInBed,
    loading,
  } = props;
  useEffect(() => {
    populateDropDowns();
  }, [populateDropDowns]);

  console.log(minutesAsleep);
  console.log(minutesInBed);

  if (!loading) {
    return (
      <View>
        <View>
          <Text style={styles.sectionTitle}>Big Health Take Home Test</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text>Duration in bed</Text>
          <Dropdown times={times} onPress={setMinutes} label={'in_bed'} />
        </View>
        <View style={styles.sectionContainer}>
          <Text>Duration asleep</Text>
          <Dropdown times={times} onPress={setMinutes} label={'asleep'} />
        </View>
        <View style={styles.sectionContainer}>
          <CalculateButton />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 150,
    marginTop: 20,
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
  setMinutes: (label, minutes) => dispatch(setMinutes(label, minutes)),
});

const mapStateToProps = ({calculate}) => ({
  possible: calculate.possible,
  times: calculate.times,
  minutesInBed: calculate.minutesInBed,
  minutesAsleep: calculate.minutesAsleep,
  loading: calculate.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen);
