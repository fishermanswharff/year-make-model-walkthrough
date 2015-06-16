'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = (function(){

  var init = function(){
    trace(greet('Liz Vanderkloot'));
  };

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