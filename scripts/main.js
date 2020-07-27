'use strict';

(function() {

	var title = document.getElementById('title');

	anime({
	  targets: title,
	  translateX: 1000,
		// delay: 0,
	  duration: 800,
		direction: 'reverse',
		easing: 'spring(0, 10, 75, 2)'
	});

})();
