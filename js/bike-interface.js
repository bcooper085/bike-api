var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('.bike-form').submit(function(event) {
    event.preventDefault();
    var brand = $('#brand').val();
    var color = $('#color').val();
    $('#brand').val("");
    $('#color').val("");
    var newBike = new Bike();
    newBike.getSearched(brand);
// console.log(newBike.getSearched(brand));
  });
});
