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

firebase.database().ref().set({
  name: 'Jakub Chmielewski'
});
