/* jshint camelcase: false */
/* jshint unused: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(getMovies);
  }

  function getMovies(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?page_limit=16&page=1&country=us&apikey=8jhdttpfa787gekmjyv68vvn&callback=?';
    $.getJSON(url, movieMagic);
  }

  function movieMagic(current_releases){
    var movieNum = $('#number').val();
    var movieScore = $('#score').val();
    var movieTest = current_releases.movies.filter(n=> n.ratings.critics_score >= movieScore);
    for(var i = 0; i < movieNum; i++){
      var movieTitle = movieTest[i].title;
      var score = movieTest[i].ratings.critics_score;
      $('#output').append(`<div class='container'><div>${movieTitle}</div><div>Critics score: ${score}</div></div>`);
    }

  }

})();
