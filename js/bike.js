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
