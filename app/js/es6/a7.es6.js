/*global AmCharts:true*/
/* jshint camelcase:false*/


(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    loadGraph();
    $('#button').click(getMovieData);
  }

  var chart;
  var chartData=[];

  function loadGraph(){
    chart = AmCharts.makeChart('output', {
        'type': 'serial',
        'theme': 'dark',
        'pathToImages': 'http://www.amcharts.com/lib/3/images/',
        'legend': {
            'useGraphSettings': true
        },
        'dataProvider': chartData,
        'valueAxes': [{
            'id':'v1',
            'axisColor': '#FF6600',
            'axisThickness': 2,
            'gridAlpha': 0,
            'axisAlpha': 1,
            'position': 'left'
        }, {
            'id':'v2',
            'axisColor': '#FCD202',
            'axisThickness': 2,
            'gridAlpha': 0,
            'axisAlpha': 1,
            'position': 'right'
        }, {
            'id':'v3',
            'axisColor': '#B0DE09',
            'axisThickness': 2,
            'gridAlpha': 0,
            'offset': 50,
            'axisAlpha': 1,
            'position': 'left'
        }],
        'graphs': [{
            'valueAxis': 'v1',
            'lineColor': '#FF6600',
            'bullet': 'round',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'audience score',
            'valueField': 'viewers',
    		'fillAlphas': 0
        }, {
            'valueAxis': 'v2',
            'lineColor': '#FCD202',
            'bullet': 'square',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'critics score',
            'valueField': 'critics',
    		'fillAlphas': 0
        }],
        'chartScrollbar': {},
        'chartCursor': {
            'cursorPosition': 'mouse'
        },
        'categoryField': 'movie',
        'categoryAxis': {
            //'parseDates': true,
            'axisColor': '#DADADA',
            'minorGridEnabled': true
        }
    });

    // chart.addListener('dataUpdated', zoomChart);
    // zoomChart();
    //
    // function zoomChart(){
    //     chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
    // }

  }

  function getMovieData(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=8jhdttpfa787gekmjyv68vvn&callback=?';
    var number = $('#number').val()*1;
    //console.log(number);
    $.getJSON(url, function(box_office){
      var movies = box_office.movies;
      //console.log(movies);
      for(var i = 0; i < number; i++){
        var movieObject ={
          movie: movies[i].title,
          critics: movies[i].ratings.critics_score,
          viewers: movies[i].ratings.audience_score
        };
        chartData.push(movieObject);
        chart.validateData();
      }
    });
  }




})();
