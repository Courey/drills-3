/* jshint camelcase:false*/
/*jshint unused:false*/
(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#get').click(getMovies);
  }

  function getMovies(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=8jhdttpfa787gekmjyv68vvn&callback=?';
    $.getJSON(url, movies);
  }

  function movies(box_office){
    var movieList = box_office.movies.forEach(n=>appendDiv(n));
    //appendDiv(movieList);
    // movies.title = title
    // movies.posters.thumbnail = poster

    console.log(movieList);
  }

  function appendDiv(index){
    $('#output').append(`<div>${index.title}</div><div><img src =${index.posters.thumbnail}></img></div>`);
  }

})();
