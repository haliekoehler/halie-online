'use strict';

(function() {

let status = 'active';

// // fade out
// function fadeOut(el){
//   el.style.opacity = 1;
//
//   (function fade() {
//     if ((el.style.opacity -= .1) < 0) {
//       el.style.display = 'none';
//       el.classList.add('hidden');
//     } else {
//       requestAnimationFrame(fade);
//     }
//   })();
// }
//
// // fade in
// function fadeIn(el, display){
//   if (el.classList.contains('hidden')){
//     el.classList.remove('hidden');
//   }
//   el.style.opacity = 0;
//   el.style.display = display || "block";
//
//   (function fade() {
//     var val = parseFloat(el.style.opacity);
//     if (!((val += .1) > 1)) {
//       el.style.opacity = val;
//       requestAnimationFrame(fade);
//     }
//   })();
// }

function animationStatus() {
	let el = document.getElementById('links');

	if (status = 'active') {
		status = 'complete'
	}
	// console.log(status);
	if (status = 'complete') {
		fadeIn(el);
	}
}

// var btn = document.querySelector('.js-btn');
// var el = document.querySelector('.js-fade');
//
// btn.addEventListener('click', function(e){
//   if(el.classList.contains('is-hidden')){
//     fadeIn(el);
//   }
//   else {
//     fadeOut(el);
//   }
// });

new TypeIt("#hero-header", {
	speed: 45,
	lifelike: true,
	html: true,
	deleteSpeed: 80
})
.type("Hello.")
.pause(50)
.type(" I'm <span>Halie Koehler</span>,")
.pause(100)
.break()
.type("a UI/UX Designer,")
.pause(150)
.options({speed: 45})
.type(" Front End Developer,")
.pause(150)
.type(" and")
.pause(100)
.type(" Visual Artist.")
.pause(1000)
.options({afterComplete: function(step, instance) {
	// animationStatus();
	instance.destroy();
}})
.go();

})();
