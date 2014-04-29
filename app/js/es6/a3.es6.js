/* jshint unused:false */
/* global moment: true */
(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(dateMe);
  }

  function dateMe(){
    var date = $('#date').val();
    var fromNow = moment(date).fromNow();
    $('#output').text(fromNow);
    console.log(fromNow);
    //var fromNow = moment(date).fromNow();
    //$('#output').append(`<div>${date}</div>`);
  }

})();
