import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import Dropdown from './Dropdown';
import CalculateButton from './CalculateButton';
import {populateDropDowns} from '../actions/populateDropDowns';
import {setMinutes} from '../actions/setMinutes';
import {getCalculatedScore} from '../actions/getCalculatedScore';
import Loader from './Loader';

const CalculateScreen = props => {
  const {
    populateDropDowns,
    times,
    setMinutes,
    minutesAsleep,
    minutesInBed,
    loading,
    getCalculatedScore,
    score,
  } = props;
  useEffect(() => {
    populateDropDowns();
  }, [populateDropDowns]);

  const [calculateEnabled, setCalculateEnabled] = useState(false);

  useEffect(() => {
    setCalculateEnabled(minutesAsleep && minutesInBed);
  }, [minutesAsleep, minutesInBed]);

  const calculateScore = () => {
    getCalculatedScore(minutesInBed, minutesAsleep);
    console.log(score);
  };

  return (
    <View>
      {loading ? <Loader /> : null}
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
        <CalculateButton enabled={calculateEnabled} onPress={calculateScore} />
        <Text style={styles.sectionTitle}>Score: {score}</Text>
      </View>
    </View>
  );
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
  getCalculatedScore: (durationInBed, durationAsleep) =>
    dispatch(getCalculatedScore(durationInBed, durationAsleep)),
});

const mapStateToProps = ({calculate}) => ({
  possible: calculate.possible,
  times: calculate.times,
  minutesInBed: calculate.minutesInBed,
  minutesAsleep: calculate.minutesAsleep,
  loading: calculate.isLoading,
  score: calculate.score,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen);
