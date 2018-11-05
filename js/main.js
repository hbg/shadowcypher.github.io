

$(document).on('ready', function() {
	new WOW({
		                      boxClass:     'wow',      // default
		                      animateClass: 'animated', // default
		                      offset:       200,   
		                      mobile:       true,       // default
		                      live:         true        // default
	}).init();
	$('.tooltipped').tooltip();

	var rellax = new Rellax('.rellax');
});