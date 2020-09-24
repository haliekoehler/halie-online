'use strict';

(function() {

let status = 'active';

function animationStatus() {
	if (status = 'active') {
		status = 'complete'
	}
	console.log(status);
}

new TypeIt("#hero-header", {
	speed: 45,
	lifelike: true,
	html: true,
	deleteSpeed: 80
})
.type("Hello.")
.pause(250)
.type(" I'm <span>Halie Koehler</span>,")
.pause(500)
.break()
.type("a ")
.pause(60)
.options({speed: 80})
.type("Designer.")
.pause(500)
.delete(9)
.type("UI/UX Designer.")
.pause(500)
.delete(1)
.pause(20)
.type(",")
.pause(200)
.options({speed: 45})
.type(" Front-end Developer,")
.pause(200)
.type(" and")
.pause(300)
.type(" Visual Artist.")
.pause(3500)
.options({afterComplete: function(step, instance) {
	animationStatus();
	instance.destroy();
}})
.go();

})();
