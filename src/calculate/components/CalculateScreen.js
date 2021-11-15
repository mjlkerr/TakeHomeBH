import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {default as CalculateScreenStyles} from './styles/CalculateScreenStyles';
import Dropdown from './Dropdown';
import CalculateButton from './CalculateButton';
import {populateDropDowns} from '../actions/populateDropDowns';
import {setMinutes} from '../actions/setMinutes';
import {getCalculatedScore} from '../actions/getCalculatedScore';
import Loader from './Loader';

const {sectionContainer, sectionTitle} = CalculateScreenStyles;

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
  };

  return (
    <View>
      {loading ? <Loader /> : null}
      <View>
        <Text style={sectionTitle}>Big Health Take Home Test</Text>
      </View>
      <View style={sectionContainer}>
        <Text>Duration in bed</Text>
        <Dropdown times={times} onPress={setMinutes} label={'in_bed'} />
      </View>
      <View style={sectionContainer}>
        <Text>Duration asleep</Text>
        <Dropdown times={times} onPress={setMinutes} label={'asleep'} />
      </View>
      <View style={sectionContainer}>
        <CalculateButton
          disabled={!calculateEnabled}
          onPress={calculateScore}
        />
        <Text style={sectionTitle}>
          Score: {loading ? 'Loading...' : score}
        </Text>
      </View>
    </View>
  );
};

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
