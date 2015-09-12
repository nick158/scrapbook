var app = angular.module('scrapbook', []);
var $container = $('#container');
// init
$container.packery({
  itemSelector: '.item',
  gutter: 0
});