!function n(o,t,e){function r(a,i){if(!t[a]){if(!o[a]){var c="function"==typeof require&&require;if(!i&&c)return c(a,!0);if(u)return u(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var p=t[a]={exports:{}};o[a][0].call(p.exports,function(n){var t=o[a][1][n];return r(t?t:n)},p,p.exports,n,o,t,e)}return t[a].exports}for(var u="function"==typeof require&&require,a=0;a<e.length;a++)r(e[a]);return r}({1:[function(n,o,t){function e(n){this.skin=n}e.prototype.pingPong=function(n){for(var o=[],t=1;t<=n;t++)t%15==0?o.push("ping-pong"):t%3==0?o.push("ping"):t%5==0?o.push("pong"):o.push(t);return o},e.prototype.calculate=function(n,o,t){return"add"===o?n+t:"subtract"===o?n-t:"multiply"===o?n*t:n/t},t.calculatorModule=e},{}],2:[function(n,o,t){var e=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){var n=new e("camo");$(".calculate").submit(function(o){o.preventDefault(),console.log("in calculate function");var t=parseInt($("#first-number").val()),e=$('input[name="math-symbol"]:checked').val();console.log(e);var r=parseInt($("#second-number").val());console.log(r);var u=n.calculate(t,e,r);$("#math-result").text(u)})});var e=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){var n=new e("camo");$("#ping-pong-form").submit(function(o){o.preventDefault();var t=$("#goal").val();n.pingPong(t).forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var o=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+o+" has been added to our list!</p>")})})},{"./../js/pingpong.js":1}]},{},[2]);