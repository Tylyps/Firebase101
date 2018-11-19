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
  location: {
    city: 'Białystok',
    country: 'Poland'
  }
});

// database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('Warszawa');

database.ref('attributes').set({ height: 178, weight: 80 });
