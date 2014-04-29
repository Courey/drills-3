/* jshint unused:false*/
(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(square);
  }

  function square(){
    $('#numbers').val().split(',').map(n=> n*1).map(n=>n*n).map(x=> `<div>${x}</div>`).forEach(x=>$('#output').append(x));
  }

})();
