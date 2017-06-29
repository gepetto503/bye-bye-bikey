var apiKey = require('./../.env').apiKey;

BikeSearch = function() {
}

//compile user input and our apiKey into an api request url
BikeSearch.prototype.locateBike = function(make, location, distance, displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + '&location=' + location + '&distance=' + distance + '&stolenness=proximity&access_token=' + apiKey).then(function(response) {
    //call displayBikes which appends properties of the api response into our html
    displayBikes(response.bikes);
    alert('hi');
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
}
exports.bikeSearchModule = BikeSearch;
