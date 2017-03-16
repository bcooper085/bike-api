(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiToken = "241d797aebe722f98ba85097c37113cd974ba27ab0a354a4e982f6af46391b3f"

},{}],2:[function(require,module,exports){
var apiToken = require("./../.env").apiToken;

function Bike() {

}

Bike.prototype.getSearched = function(brand) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + brand + '&location=IP&distance=10&stolenness=stolen&access_token=' + apiToken)
    .then(function(response) {
      // $('#all-bikes').tex
           $.each(response.bikes, function(index, bike) {
           $("#all-bikes").append("<p>" + bike + "</p>");
      });
console.log(response.bikes);

    }).fail(function (error) {
      $('#all-bikes').append(error.responseJSON.message);
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/bike.js":2}]},{},[3]);
