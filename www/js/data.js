$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page

		Parse.initialize("2gDKPSJ6C73mIY4VHpUgItBgg8wuGUlGjUEAS45o", "f0n6EqyAK7t0uRLrNjF7KBJw1ybCm6ZtjQBF40zd");

    var Hold = Parse.Object.extend("Hold");

    var hold = new Hold();
    		hold.save({
          X: [6,7,8,9,10],
          Y: [1,2,3,4,5],
          duration: 32
          }).then(function(object) {
            console.log("It works, still!");
          });

//________________________________________


		var Data = Parse.Object.extend("Data");

		var DataSet = Parse.Collection.extend({
		    model: Data
      });

		var DataSetView =  Parse.View.extend({
    template: Handlebars.compile($('#dataSet-tpl').html()),
    render: function(){
        var collection = { data: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
  });

		var dataSet = new DataSet();

		dataSet.fetch({
			success: function(dataSet) {
			    var dataSetView = new DataSetView({ collection: dataSet });
			    dataSetView.render();
			    $('.putMyDataHere').html(dataSetView.el);
			},
		    error: function(dataSet, error) {
		        console.log(error);
		    }
		});

});
