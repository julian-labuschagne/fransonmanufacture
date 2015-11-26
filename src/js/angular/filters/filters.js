angular.module('flickrFilters', []).filter('imagesize', function() {
  return function(input) {
    return input.substring(0, input.length - 5);
  };
});
