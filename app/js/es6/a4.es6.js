 /* global _:true*/
 /* jshint unused:false */
(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(arrayThing);
  }
  function arrayThing(){
    var numberArray = $('#numbers').val().split(',').map(n=> n.trim()).map(n=> n*1);
    var rangeArray = _.range(numberArray[0],numberArray[1],numberArray[2]).map(n=> Math.pow(n,3)).forEach(n=> $('#output').append(`<div> ${n}</div>`));
    console.log(rangeArray);
  }

})();
