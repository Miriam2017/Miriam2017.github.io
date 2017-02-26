//Create the reservationData object. The user input will go here

var reservationData = {};



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCC1OQ2-z918QkOn_vBFtDHEVGgXlhjiGU",
    authDomain: "reservation-site-8c220.firebaseapp.com",
    databaseURL: "https://reservation-site-8c220.firebaseio.com",
    storageBucket: "reservation-site-8c220.appspot.com",
    messagingSenderId: "65166513183"
  };

  	firebase.initializeApp(config);

	var database = firebase.database();



//Now, when an option is clicked, set the day:

	$('.reservation-day li').on('click', function() {
		reservationData.day = $(this).text();

	});

//Now, the name data, which needs a val(). Together, these grab input from the dom and create the object

	$('.reservations').on('submit', function(e){
		e.preventDefault();

		reservationsData.name = $('.reservation-name').val();

	

//Now, create a section in the db for reservations
database.ref('reservations').push(reservationData);
});


// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(snapshot) {

  // grab element to hook to
  var reservationList = $('.reservation-list');
  
  // get data from database
  var reservations = snapshot.val();

  // get your template from your script tag
  var source   = $("#reservation-template").html();

  // compile template
  var template = Handlebars.compile(source);
  
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);

  // append created template
  reservationList.append(reservationTemplate);
});


//Google map api for Restaurant location 
//initialize 
 
function initMap() {
    	

    	var map = new google.maps.Map(document.getElementById("google-map"), {				
    			center: {lat: 40.8054491, lng: -73.9654415},
    			zoom: 12,
    			scrollwheel: false
    			});
    			

//marker constructor-adds a marker on the map
    	var marker = new google.maps.Marker({
    			position: {lat: 40.8054491, lng: -73.9654415},
    			map: map,
    			name: "Monks Cafe"

    			});
    		}




