import React from 'react';
import {Text, View} from 'react-native';

const users = [
  {
    name: {
      first: 'Tommy',
      last: 'Bahama',
    },
    phoneNumber: '+1(818)555-7777',
    address: '124 Fake St.',
    city: 'Los Angeles',
    state: 'ca',
    age: 27,
  },
  {
    name: {
      first: 'Cindy',
      last: 'Lu',
    },
    phoneNumber: '+1(805)555-8888',
    address: '1218 Gerald Ave.',
    city: 'Glendale',
    state: 'nv',
    age: 48,
  },
  {
    name: {
      first: 'Barry',
      last: 'Standford',
    },
    phoneNumber: '+3(800)888-7777',
    address: '78 Ward Way',
    city: 'New York',
    state: 'NY',
    age: 17,
  },
  {
    name: {
      first: 'Linda',
      last: 'Huntington',
    },
    phoneNumber: '+1(310)999-5555',
    address: '145637 Main St.',
    city: 'Wichita',
    state: 'tx',
    age: 63,
  },
  {
    name: {
      first: 'Geno',
      last: 'Sonoma',
    },
    phoneNumber: '+1(480)222-4444',
    address: undefined,
    city: 'Kansas City',
    state: 'mo',
    age: 67,
  },
];

const expectedUserObject = {
  firstName: 'Tommy',
  lastName: 'Bahama',
  phone: '8185557777',
  address: '124 Fake St.',
  city: 'Los Angeles',
  state: 'CA',
  ageUntilSixtyFive: 38,
  generatedId: 'fhj39nf2389',
};

const mapUsers = users => {
  return users.map((u, index) => ({
    firstName: u.name.first,
    lastName: u.name.last,
    phone: u.phoneNumber.slice(3).replace('-', '').replace(')', ''),
    address: u.address,
    city: u.city,
    state: u.state.toUpperCase(),
    ageUntilSixtyFive: u.age > 65 ? 0 : 65 - u.age,
    generatedId: index,
  }));
};

const removeUser = (firstName, users) => {
  return users.filter(u => u.firstName !== firstName);
};

const updateUser = (firstName, newName, users) => {
  return users.map(u => ({
    firstName: u.firstName == firstName ? newName : u.firstName,
  }));
};

const TestScreen = props => {
  const newUsers = mapUsers(users);
  console.log(newUsers);
  console.log(removeUser('Carol', newUsers));
  console.log(updateUser('Linda', 'Carol', newUsers));

  return (
    <View>
      <Text>stuff</Text>
    </View>
  );
};

export default TestScreen;
