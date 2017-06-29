var BikeSearch = require('./../js/bike_search.js').bikeSearchModule;

var displayBikes = function(x) { // x = bikes array from response
  $('.i-stole-it').empty();
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    $('.i-stole-it').append(
    '<div class="stolen-bike">' +
      '<h2>' + x[i].title + '</h2>' +
      '<ul class="properties">' +
        '<li> Serial: ' + x[i].serial + '</li>' +
        '<li> Frame Model: ' + x[i].frame_model + '</li>' +
        '<li> Model Year: ' + x[i].year + '</li>' +
        '<li> Color(s): ' + x[i].frame_colors + '</li>' +
        '<li> Stolen Location: ' + x[i].stolen_location + '</li>' +
      '</ul>' +
    '</div>');


    // $('.title').text(x[i].title);
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
