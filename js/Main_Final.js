/* =====================
Leaflet Configuration
===================== */
var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//function to enter house
var hidehouse = function(){
  $( ".house" ).hide()
  $(".door").hide()
  $(".page1").show()
  $(".page2").hide()
}

//page 1 elements
var page1 = function(){
  $(".page1").show()
  $(".page2").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
}

//page 2 elements
var page2 = function(){
  $(".page2").show()
  $(".page1").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
}

//people popup
var factsPopUp =function() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//map function
var mapOpen = function() {
  $(".page1").hide()
  $(".page2").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $(".pagination").hide()
  $( "#map" ).show()
}


$(".door").click(hidehouse)

$("#door1").click(mapOpen)