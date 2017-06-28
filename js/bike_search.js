var apiKey = require('./../.env').apiKey;

BikeSearch = function() {
}

BikeSearch.prototype.locateBike = function(make, location, distance, displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + '&location=' + location + '&distance=' + distance + '&stolenness=proximity&access_token=' + apiKey).then(function(response) {
    displayBikes(response.bikes);//response.bikes is an array of bikes
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
}
exports.bikeSearchModule = BikeSearch;
