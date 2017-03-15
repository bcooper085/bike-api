var apiToken = require("./../.env").apiToken;

function Bike() {

}

Bike.prototype.getSearched = function(brand, color) {
  var bikeArray = [];
  for (var i = 0; i < 100; i++)
  {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + brand + '&frame_colors=' + color + '&location=IP&distance=10&stolenness=stolen&access_token=' + apiToken)
    .then(function(response) {
      // $('#all-bikes').text
      var oneBike = "A " + brand + " with the model " + response.bikes.frame_model + " has been found in your area with the frame color " + color + "."
      bikeArray.push(oneBike);
    }).fail(function(error) {
      $('.display-area').append(error.responseJSON.message);
    });
  }
  console.log(bikeArray);
};

exports.bikeModule = Bike;
