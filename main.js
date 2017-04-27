
// the one that works. 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDM6H1NkKcMWB-EjWg0u52BuXKdGn6xAfc",
    authDomain: "fbchap8.firebaseapp.com",
    databaseURL: "https://fbchap8.firebaseio.com",
    projectId: "fbchap8",
    storageBucket: "fbchap8.appspot.com",
    //messagingSenderId: "959261246991"
  };

  //configure firebase
  firebase.initializeApp(config);

//create the database
  var database = firebase.database()

//create the object literal that will hold the reservationData
  var reservationData = {};


//SUBMIT : send data to the database; the class comes from <form>, the key/value pairs
//for the object come from the class names from the <input> the click event 

$('.reservation-form').on('submit', function(e) {
  e.preventDefault();

  reservationData.name = $('.reservation-name').val();
  
  reservationData.number = $('.reservation-number').val();
  


var reservationsReference = database.ref('reservations');

reservationsReference.push(reservationData); 


});

//Now, to get the reservations data after new reservations have loaded so they can be displayed in the template
function getReservations() {

		database.ref()





}





//make the template
database.ref('reservations').on('child_added', function(snapshot) {
	var reservationList = $('.reservation-list');


})