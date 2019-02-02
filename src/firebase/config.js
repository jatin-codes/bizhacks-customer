import firebase from 'firebase/app';
import  'firebase/database';

var config = {
    apiKey: "AIzaSyDsBijz0_8N3x60wYd2r2dVVsN4Eju_Av8",
    authDomain: "bizhacks-6d5c1.firebaseapp.com",
    databaseURL: "https://bizhacks-6d5c1.firebaseio.com",
    projectId: "bizhacks-6d5c1",
    storageBucket: "bizhacks-6d5c1.appspot.com",
    messagingSenderId: "452491864544"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {
    database
}