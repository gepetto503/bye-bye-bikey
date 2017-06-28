var BikeSearch = require('./../js/bike_search.js').bikeSearchModule;

var displayBikes = function(x) { // x = bikes array from response
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    $('.showBikes').append('<li>' + x[i].title + '</li>');
  }
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
