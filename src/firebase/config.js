import firebase from 'firebase/app';
import  'firebase/database';

var config = {
    "ADD YOUR API CREDENTIALS HERE"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {
    database
}
