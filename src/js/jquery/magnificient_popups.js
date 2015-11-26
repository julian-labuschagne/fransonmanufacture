$(document).ready(function() {
    $('.mg-popup').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		
		// other options
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
  });
});



