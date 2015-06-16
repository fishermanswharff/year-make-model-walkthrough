'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = (function(){

  var init = function(){
    trace(greet('Liz Vanderkloot'));

    $('select#year').on('change', function(){
      yearChange(this);
    });

    $('select#make').on('change', function(){});

    $('select#model').on('change', function(){});

    $.getJSON('../data/years.json',function(data){
      $(data).each(function(){
        var option = $('<option>');
        option.text(this).val(this).appendTo('select#year');
      });
    });
  };

  var yearChange = function(select){
    $.getJSON('../data/makes-'+select.value+'.json',function(data){trace(data)});
  };

  var makeChange = function(select){};

  var modelChange = function(select){};

  var greet = function(string){
    return typeof string !== 'undefined' ? 'Hello ' + string : 'Hello World';
  };

  return {
    init: init
  };
})(App = App || {});

$(document).ready(function(){
  App.init();
});
