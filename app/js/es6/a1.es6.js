/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(movieString);
  }

  function movieString(){
    var first = $('#first').val().toLowerCase();
    var last = $('#last').val().toLowerCase();
    var movie = $('#movie').val().toUpperCase();

    $('#output').text(`${first} ${last} loves ${movie}`);

  }




})();
