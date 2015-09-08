$(function() {

  var $window = $(window);
  var $index = $('.index')
  var $indexGlobalHeader = $index.find('.global-header');
  var $indexSectionPrimary = $index.find('.section--primary');
  var $indexSectionSecondary = $index.find('.section--secondary');

  var $animateElements = [ $indexGlobalHeader, $indexSectionPrimary, $indexSectionSecondary ];

  if (!getCookie("hasVisited")) {
    $animateElements.forEach(function(element) {
      element.addClass('animate');
    });

    setTimeout(function(){
      $animateElement.forEach(function(element) {
        element.removeClass('animate');
      });
    }, 2000);

    document.cookie = "hasVisited=true";
  }
});

function getCookie(name) {
	var regexp = new RegExp('; ' + name + '=([^;]*);');
	var match  = ('; ' + document.cookie + ';').match(regexp);
	if (match) return !!match[1];
}
;
