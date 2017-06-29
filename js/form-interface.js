var BikeSearch = require('./../js/bike_search.js').bikeSearchModule;

var displayBikes = function(bikeArray) { // x = bikes array from response
  $('.i-stole-it').empty();
  console.log(bikeArray);
  for (var i = 0; i < bikeArray.length; i++) {
    $('.i-stole-it').append(
    '<div class="stolen-bike">' +
      '<h2>' + bikeArray[i].title + '</h2>' +
      '<ul class="properties">' +
        '<li> Serial: ' + bikeArray[i].serial + '</li>' +
        '<li> Frame Model: ' + bikeArray[i].frame_model + '</li>' +
        '<li> Model Year: ' + bikeArray[i].year + '</li>' +
        '<li> Color(s): ' + bikeArray[i].frame_colors + '</li>' +
        '<li> Stolen Location: ' + bikeArray[i].stolen_location + '</li>' +
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
