import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';

const Dropdown = props => {
  const {times} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [dropdownTimes, setTimes] = useState(times);
  // const [items, setItems] = useState([
  //   {label: '0 Minutes', value: 0},
  //   {label: '30 Minutes', value: 30},
  //   {label: '1 Hour', value: 60},
  //   {label: '1 Hour and 30 Minutes', value: 90},
  // ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={times}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setTimes}
    />
  );
};

export default Dropdown;
