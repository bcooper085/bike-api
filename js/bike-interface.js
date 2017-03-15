var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('.bike-form').submit(function() {
    event.preventDefault();
    var
  })
})


$.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + brand + '&frame_colors=' + color + '&location=IP&distance=10&stolenness=stolen&access_token=3f79968f660d394ea2eaec53e05d8a1cd8da2472f3353736cdf1e1555415221a')
  .then(function(response) {
    $('.display-area').text(brand + "found in your area with the color" + color + )
  })




$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    //the variable response is declared inside the function () and set equal to returned objects from api call
    .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
