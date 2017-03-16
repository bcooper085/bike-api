(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiToken = "1970179c875a88059868d4f726827a4ec1400ebaa5f0ed1de06172c7583a1bee";


// 1970179c875a88059868d4f726827a4ec1400ebaa5f0ed1de06172c7583a1bee
//
// Access code: 09b481e6d4e7c958a78dabe12d25c3e9c19ca76919545299f743d72f0fefb55c
//
// Access code converted into a token at this url:
//
// https://bikeindex.org/oauth/token?client_id=c3f3dc5d997806f04db27779c39fd4f6a107609f3f5d9ecc7335a27ec1096115&client_secret=8024e8f3134e7d681c824ee2a8ada25b9f19a22198e0b11aa8d95a73809731ee&code=09b481e6d4e7c958a78dabe12d25c3e9c19ca76919545299f743d72f0fefb55c&grant_type=authorization_code&redirect_uri=https%3A%2F%2Fbikeindex.org%2Fdocumentation%2Fauthorize
// Since this needs to be a POST request, we make the request via javascript and put the response in the box below.
//
// You can now return to the documentation page to use your token.
// Access token response
//
// {
//   "access_token": "1970179c875a88059868d4f726827a4ec1400ebaa5f0ed1de06172c7583a1bee",
//   "token_type": "bearer",
//   "expires_in": 3600,
//   "refresh_token": "d04948de136321eea39083d5b06634d7d32e1de0221fd05a46c5d0e6d7774f2c",
//   "created_at": 1489677150
// }

},{}],2:[function(require,module,exports){
var apiToken = require("./../env").apiToken;

function Bike() {

}

var displayBike = function(manufacturer) {
  $('#all-bikes').append("<li>Manufacturer: " + manufacturer + "</li>" );
};

Bike.prototype.getSearched = function(manufacturer) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + manufacturer + '&location=IP&distance=&stolenness=stolen&access_token=' + apiToken)
    .then(function(response) {
      // $('#all-bikes').tex
           response.bikes.forEach(function(bike) {
          displayBike(bike.title);
    }).fail(function (error) {
      $('#all-bikes').text(error.responseJSON.message);
    });
});
};

exports.bikeModule = Bike;



// var searchArrayReq = $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + brand + '&frame_colors=' + color + '&location=IP&distance=10&stolenness=stolen&access_token=' + apiToken);
//
//
// Bike.prototype.getSearched = function(brand, color) {
//
// searchArrayReq.foreach(item in )
// {
//   return item.then(function(response) {
//     $(".display-area").text("A " + brand + " with the model " + response.bikes.frame_model + " has been found in your area with the frame color " + color + ".");
//   }).fail(function(error) {
//     $('.display-area').text(error.responseJSON.message);
//   });
// };
//
// };

},{"./../env":1}],3:[function(require,module,exports){
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

},{"./../js/bike.js":2}]},{},[3]);
