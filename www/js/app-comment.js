// var myApp = new Framework7();
//
// var mainView = myApp.addView('.view-main', {
// 	// Because we want to use dynamic navbar, we need to enable it for this view:
// 	dynamicNavbar: true
// });

var dur = "0";

$( document ).ready(function() {

// BEGIN APP
// _________

// var myApp = new Framework7();

// TOCK CLOCK
// _________

// VIEWS
// _________

// var mainView = myApp.addView('.view-main')
// var rightView = myApp.addView('.view-right')
// var leftView = myApp.addView('.view-left')
//
// // LOAD PAGES
// // _________
//
// mainView.router.loadPage('index.html');
// rightView.router.loadPage('chamber.html')
// leftView.router.loadPage('highscores.html')


	// var hold = new Hold();
	// 		hold.save({
	// 			X: [6,7,8,9,10],
	// 			Y: [1,2,3,4,5],
	// 			duration: 32
	// 			}).then(function(object) {
	// 				console.log("It works, still!");
	// 			});

	// _________




});

// TOCK CLOCK

window.onload = function() {

Parse.$ = jQuery;

Parse.initialize("2gDKPSJ6C73mIY4VHpUgItBgg8wuGUlGjUEAS45o",
								 "f0n6EqyAK7t0uRLrNjF7KBJw1ybCm6ZtjQBF40zd");


var Hold = Parse.Object.extend("Hold");

// 	var user = new Parse.User();
//
// 	user.set("username", "mypass");
// 	user.set("password", "my pass");
// 	user.set("email", "email@example.com");
//
// 	user.signUp(null, {
//   	success: function(user) {
//   },
//   	error: function(user, error) {
//     	alert("Error: " + error.code + " " + error.message);
//   }
// });
//
// Parse.User.logIn("myname", "mypass", {
//   success: function(user) {
//     // Do stuff after successful login.
//   },
//   error: function(user, error) {
//     // The login failed. Check error to see why.
//   }
// });

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

	// _________

	// _________

	// var Data = Parse.Object.extend("Data");
	//
	// var DataSet = Parse.Collection.extend({
	// 		model: Data
	// 	});
	//
	// var DataSetView =  Parse.View.extend({
	// template: Handlebars.compile($('#dataSet-tpl').html()),
	// render: function(){
	// 		var collection = { data: this.collection.toJSON() };
	// 		this.$el.html(this.template(collection));
	// }
	// });
	//
	// var dataSet = new DataSet();
	//
	// dataSet.fetch({
	// 	success: function(dataSet) {
	// 			var dataSetView = new DataSetView({ collection: dataSet });
	// 			dataSetView.render();
	// 			$('.putMyDataHere').html(dataSetView.el);
	// 	},
	// 		error: function(dataSet, error) {
	// 				console.log(error);
	// 		}
	// });

}
