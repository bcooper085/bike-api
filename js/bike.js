var apiToken = require("./../.env").apiToken;

function Bike() {

}

Bike.prototype.getSearched = function(brand, color) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + brand + '&frame_colors=' + color + '&location=IP&distance=10&stolenness=stolen&access_token=' + apiToken)
    .then(function(response) {
      $('.display-area').text("A " + brand + " with the model " + response.bikes[0].frame_model + " has been found in your area with the frame color " + color + ".");

    }).fail(function(error) {
      $('.display-area').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
