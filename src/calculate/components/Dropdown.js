import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState, useEffect} from 'react';

const Dropdown = props => {
  const {times, open, onPress, label} = props;
  const [isOpen, setOpen] = useState(open);
  const [value, setValue] = useState(null);
  const [dropdownTimes, setTimes] = useState(times);

  useEffect(() => {
    onPress(label, value);
  }, [label, onPress, value]);
  return (
    <DropDownPicker
      open={isOpen}
      value={value}
      items={times}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setTimes}
      dropDownContainerStyle={{
        zIndex: 3000,
        maxHeight: 120,
      }}
    />
  );
};

export default Dropdown;
