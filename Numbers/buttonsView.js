var CalcButtons = Backbone.View.extend({

	buttons: "",

	events: {
		"click button": "keyDownHandler"
	},

	initialize: function() {
		var btns = this.$el[0];

		// TODO add event listeners for keyboard
		
		/*for (var i = 0; i < btns.length; i++) {
			// btns[i].addEventListener("keyDown", this.keyDownHandler, false);
			btns[i].addEventListener("click", this.keyDownHandler, false);
		}*/

		this.buttons = btns;
	},

	keyDownHandler: function(e) {
		e.preventDefault();
		this.model.set({output: e.target.id});
	}

});