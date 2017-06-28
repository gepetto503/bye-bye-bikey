var BikeSearch = require('./../js/bike_search.js').bikeSearchModule;

var displayBikes = function(bikeTitle) {
  $('.showBikes').text("Bike Title: " + bikeTitle);
}

$(function () {
  var newBikeSearch = new BikeSearch();
  $('#bike_form').submit(function(event) {
    event.preventDefault();
    var make = $('#make-form').val();
    var location = $('#location-form').val();
    var distance = $('#distance-form').val();
    newBikeSearch.locateBike(make, location, distance, displayBikes);
  });
});
