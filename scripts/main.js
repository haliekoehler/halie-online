'use strict';

(function() {

new TypeIt("#hero-header", {
	speed: 45,
	lifelike: true,
	html: true
})
.type("Hello.")
.pause(250)
.type(" I'm <span>Halie Koehler</span>,")
.pause(500)
.break()
.type("a ")
.pause(60)
.type("Designer.")
.pause(200)
.options({speed:100})
.delete(9)
.options({speed: 80})
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
.pause(5000)
.options({afterComplete: function(step, instance) {
	instance.destroy();
}})
.go();

})();
