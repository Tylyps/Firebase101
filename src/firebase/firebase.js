import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcGxmLcb1CSyoUYj61Rrk4zqFnQMWq6fo",
  authDomain: "expensify-19ee4.firebaseapp.com",
  databaseURL: "https://expensify-19ee4.firebaseio.com",
  projectId: "expensify-19ee4",
  storageBucket: "expensify-19ee4.appspot.com",
  messagingSenderId: "852781922355"
};

firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
  name: 'Jakub Chmielewski',
  age: 21,
  isSingle: false,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Bitcraft'
  },
  location: {
    city: 'Białystok',
    country: 'Poland'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((error) => {
  console.log('This faled.', e);
});

// database.ref().update({
//   name: 'Kuba',
//   age: 20,
//   job: 'Software developer',
//   isSingle: null,
//   'location/city': 'Warszawa'
// });

database.ref().update({
  stressLevel: 9,
  'job/company': 'Netguru',
  'location/city': 'Poznań'
});

// database.ref().set('This is my data');
// database.ref('age').set(27);
// database.ref('location/city').set('Warszawa');
// database.ref('attributes').set({ height: 178, weight: 80 }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });
// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
// database.ref('age').set(null);
