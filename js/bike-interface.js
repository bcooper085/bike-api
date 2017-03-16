var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var newBike = new Bike();

  $('.bike-form').submit(function(event) {
    event.preventDefault();
    $('#all-bikes').empty();
    var manufacturer = $('#manufacturer').val();
    $('#manufacturer').val("");

    newBike.getSearched(manufacturer);


// console.log(newBike.getSearched(brand));
  });
});
