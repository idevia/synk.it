// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjRbd_f7Y5Ses9v683QTG3iEVmIBRT1qA",
  authDomain: "angularauth-b59d1.firebaseapp.com",
  databaseURL: "https://angularauth-b59d1.firebaseio.com",
  projectId: "angularauth-b59d1",
  storageBucket: "angularauth-b59d1.appspot.com",
  messagingSenderId: "479677620649"
};
firebase.initializeApp(config);

var s2 = Swiped.init({
  query: '.swipeIt li',
  list: true,
  right: 200
});