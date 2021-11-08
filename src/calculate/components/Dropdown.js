import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '0 Minutes', value: 0},
    {label: '30 Minutes', value: 30},
    {label: '1 Hour', value: 60},
    {label: '1 Hour and 30 Minutes', value: 90},
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default Dropdown;
