var dur = "0";

$( document ).ready(function() {

});

// TOCK CLOCK
window.onload = function() {
Parse.$ = jQuery;
Parse.initialize("2gDKPSJ6C73mIY4VHpUgItBgg8wuGUlGjUEAS45o",
								 "f0n6EqyAK7t0uRLrNjF7KBJw1ybCm6ZtjQBF40zd");

var Hold = Parse.Object.extend("Hold");
var user = prompt("Who are you?")
var timer = new Tock({
	callback: function () {
		$('#clockface').val(timer.msToTime(timer.lap()));
	}
});

// START CLOCK
$( document ).bind('mousedown', function () {
	timer.start($('#clockface').val());
});

// STOP CLOCK
$( document ).bind('mouseup', function () {
	timer.stop();
	dur = $('#clockface').val();
		var hold = new Hold();
				hold.save({
					timer: dur
					}).then(function(object) {
						timer.reset();
						$('#clockface').val('');
						$('#laptimes').html('');
						console.log("Score logged: " + dur);
						alert(user + ", you lose. Final score: " + dur)
					});
});
}
