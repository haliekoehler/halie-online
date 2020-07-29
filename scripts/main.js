'use strict';

(function() {

	var titleTimeline = anime.timeline({
		easing: 'spring(0, 10, 75, 2)',
		duration: 1000
	});
	
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
