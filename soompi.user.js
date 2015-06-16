// ==UserScript==
// @name        Soompi Music to Youtube Search
// @namespace   nqztv
// @include     http://www.soompi.com/2015/06/07/weekly-k-pop-music-chart-2015-june-week-1/
// @version     1
// @grant       none
// ==/UserScript==


songs = document.getElementsByClassName('title-container');

songs.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
