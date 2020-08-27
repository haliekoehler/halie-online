'use strict';

(function() {

	var title = document.getElementById('title');
	var titleTimeline = anime.timeline({
		easing: 'spring(0, 10, 75, 2)',
		duration: 1000
	});

// titleTimeline.add({
// 	targets: title,
// 	translateX: 1000,
// 	// delay: 0,
// 	duration: 800,
// 	direction: 'reverse',
// 	easing: 'spring(0, 10, 75, 2)'
// }).add({
// 	targets: title,
// 	translateX: -1000,
// 	// delay: 0,
// 	duration: 800,
// 	direction: 'reverse',
// 	easing: 'spring(0, 10, 75, 2)'
// });
//
//
// 	anime({
// 	  targets: title,
// 	  translateX: 1000,
// 		// delay: 0,
// 	  duration: 800,
// 		direction: 'reverse',
// 		easing: 'spring(0, 10, 75, 2)'
// 	});
//
// })();
