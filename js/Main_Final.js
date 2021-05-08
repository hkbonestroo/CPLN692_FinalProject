/* =====================
Leaflet Configuration
===================== */
var map = L.map('map', {
  center: [39.945389, -75.165166],
  zoom: 15
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


$( ".map1" ).hide()
$( ".map2" ).hide()
$( ".map3" ).hide()
$( "#map" ).hide()
$("#returnDoor").hide()
$( ".pagination" ).hide()
$(".page1").hide()
$(".page2").hide()
$(".page3").hide()
$(".page4").hide()
$(".page5").hide()
$(".page6").hide()
$(".page7").hide()

//function to enter house
var hidehouse = function(){
  $( ".house" ).hide()
  $(".door").hide()
  $(".page1").show()
  $(".page2").hide()
  $( ".pagination" ).show()
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
  $( "#map" ).hide()
  $( ".map1" ).hide()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
  $( ".leaflet-container img.leaflet-image-layer" ).remove()
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
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
}

//page 3 elements
var page3 = function(){
  $(".page2").hide()
  $(".page1").hide()
  $(".page3").show()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
}

//page 4 elements
var page4 = function(){
  $(".page2").hide()
  $(".page1").hide()
  $(".page3").hide()
  $(".page4").show()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $( "#map" ).hide()
  $( ".map2" ).hide()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
  $( ".leaflet-container img.leaflet-image-layer" ).remove()
}

//page 5 elements
var page5 = function(){
  $(".page2").hide()
  $(".page1").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").show()
  $(".page6").hide()
  $(".page7").hide()
  $( "#map" ).hide()
  $( ".map3" ).hide()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
  $( ".leaflet-container img.leaflet-image-layer" ).remove()
}

//page 6 elements
var page6 = function(){
  $(".page2").hide()
  $(".page1").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").show()
  $(".page7").hide()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
}

//page 7 elements
var page7 = function(){
  $(".page2").hide()
  $(".page1").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").show()
  $( "#returnDoor" ).hide()
  $( ".pagination" ).show()
}

//people popup
var factsPopUp1a =function() {
  var popup = document.getElementById("myPopup1a");
  popup.classList.toggle("show")
}

var factsPopUp1b =function() {
  var popup = document.getElementById("myPopup1b");
  popup.classList.toggle("show")
}

var factsPopUp1c =function() {
  var popup = document.getElementById("myPopup1c");
  popup.classList.toggle("show")
}


var factsPopUp1d =function() {
  var popup = document.getElementById("myPopup1d");
  popup.classList.toggle("show")
}

var factsPopUp1e =function() {
  var popup = document.getElementById("myPopup1e");
  popup.classList.toggle("show")
}

var factsPopUp2a =function() {
  var popup = document.getElementById("myPopup2a");
  popup.classList.toggle("show")
}

var factsPopUp2b =function() {
  var popup = document.getElementById("myPopup2b");
  popup.classList.toggle("show")
}

var factsPopUp2c =function() {
  var popup = document.getElementById("myPopup2c");
  popup.classList.toggle("show")
}

var factsPopUp2d =function() {
  var popup = document.getElementById("myPopup2d");
  popup.classList.toggle("show")
}

var factsPopUp3a =function() {
  var popup = document.getElementById("myPopup3a");
  popup.classList.toggle("show")
}

var factsPopUp4a =function() {
  var popup = document.getElementById("myPopup4a");
  popup.classList.toggle("show")
}

var factsPopUp4b =function() {
  var popup = document.getElementById("myPopup4b");
  popup.classList.toggle("show")
}

var factsPopUp4c =function() {
  var popup = document.getElementById("myPopup4c");
  popup.classList.toggle("show")
}

var factsPopUp4d =function() {
  var popup = document.getElementById("myPopup4d");
  popup.classList.toggle("show")
}

var factsPopUp4e =function() {
  var popup = document.getElementById("myPopup4e");
  popup.classList.toggle("show")
  console.log("Hello");
}

var factsPopUp5a =function() {
  var popup = document.getElementById("myPopup5a");
  popup.classList.toggle("show")
}

var factsPopUp5b =function() {
  var popup = document.getElementById("myPopup5b");
  popup.classList.toggle("show")
}

var factsPopUp5c =function() {
  var popup = document.getElementById("myPopup5c");
  popup.classList.toggle("show")
}


var factsPopUp5d =function() {
  var popup = document.getElementById("myPopup5d");
  popup.classList.toggle("show")
}

var factsPopUp6a =function() {
  var popup = document.getElementById("myPopup6a");
  popup.classList.toggle("show")
}


var factsPopUp6b =function() {
  var popup = document.getElementById("myPopup6b");
  popup.classList.toggle("show")
}
//map function
var mapOpen1 = function() {
  $(".page1").hide()
  $(".page2").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $(".pagination").hide()
  $( "#map" ).show()
  $( ".map1" ).show()

  $("#returnDoor").show()
  map.invalidateSize()
//39.941579514468785,-75.15235304832458
//39.94168439324544,-75.18299996852873
//39.9500166010947,-75.15238523483276
  var imageUrl = "images/webdubois2.png"
    imageBounds = [[ 39.94986855492455,-75.15249252319336], [39.94157231689977,-75.15235271304846], [39.94164532077879,-75.18300801515579],[39.949767801097735, -75.18298119306564
      ]];
  L.imageOverlay(imageUrl, imageBounds,{opacity: 0.4}).addTo(map);
  markers= L.marker([39.94347656161361,-75.15382155776024]).bindPopup("424 S 7th St")
  markers.addTo(map)
}

var mapOpen2 = function() {

  $(".page1").hide()
  $(".page2").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $(".pagination").hide()
  $( "#map" ).show()
  $( ".map2" ).show()
  $("#returnDoor").show()
  map.invalidateSize()
  
//39.941579514468785,-75.15235304832458
//39.94168439324544,-75.18299996852873
//39.9500166010947,-75.15238523483276
  var imageUrl = "images/jmbrewer2.png"
    imageBounds = [[39.95251997218897, -75.17346996102333
      ], [39.93628601211787,-75.17466954784393
        ], [39.935317343242325,-75.13714492321014
          ],[39.95176023187717,-75.13776404953003
      ]];
  L.imageOverlay(imageUrl, imageBounds,{opacity: 0.4}).addTo(map);
  markers= L.marker([39.94347656161361,-75.15382155776024]).bindPopup("424 S 7th St")
  markers.addTo(map)
}

var mapOpen3 = function() {

  $(".page1").hide()
  $(".page2").hide()
  $(".page3").hide()
  $(".page4").hide()
  $(".page5").hide()
  $(".page6").hide()
  $(".page7").hide()
  $(".pagination").hide()
  $( "#map" ).show()
  $( ".map3" ).show()
  $("#returnDoor").show()
  map.invalidateSize()
  
//39.941579514468785,-75.15235304832458
//39.94168439324544,-75.18299996852873
//39.9500166010947,-75.15238523483276
  var imageUrl = "images/1962landuse.png"
    imageBounds = [[39.94769717428357,-75.16264200210571
      ], [39.94702271626765,  -75.13932824134827
        ], [39.93690916128112, -75.1505162296295
          
          
          
          
          
        
          ],[39.93679810541011,-75.16264200210571
      ]];
  L.imageOverlay(imageUrl, imageBounds,{opacity: 0.4}).addTo(map);
  markers= L.marker([39.94347656161361,-75.15382155776024]).bindPopup("424 S 7th St")
  markers.addTo(map)
}

//function to go to next page
var nextPage = function() {
if ($(".page1").is(':visible')) {page2()} 
else if ($(".page2").is(':visible'))
{ page3()}
else if ($(".page3").is(':visible'))
{ page4()}
else if ($(".page4").is(':visible'))
{ page5()}
else if ($(".page5").is(':visible'))
{ page6()}
else if ($(".page6").is(':visible'))
{$('#pagination .last').prop("disabled",true)}
}

//function to go to next page
var previousPage = function() {
  if ($(".page6").is(':visible')) {page5()} 
  else if ($(".page5").is(':visible'))
  { page4()}
  else if ($(".page4").is(':visible'))
  { page3()}
  else if ($(".page3").is(':visible'))
  { page2()}
  else if ($(".page2").is(':visible'))
  { page1()}
  else if ($(".page1").is(':visible'))
  {$('#pagination .first').prop("disabled",true)}
  }

//function to go to previous page
var prevPage = function(){
  tearDown()
  var prevPage =currentPage -1
  currentPage = prevPage
  buildPage(slides[prevPage])
}

$(".door").click(hidehouse)

$("#door1").click(mapOpen1)

$("#door2").click(mapOpen2)

$("#door3").click(mapOpen3)
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});