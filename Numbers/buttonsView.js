/* -----------------------------------------
 | CalcButtons
 | -----------------------------------------
*/
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

		var pressed = e.target.id;
		console.log("Pressed: " + pressed);
		if (this.model.operations.indexOf(pressed) > -1) {
			this.model.pushStack(pressed);	
		} else if (pressed == "Enter") {
			this.model.pushStack();	
			this.model.calculate();
		} else if (this.model.functions.indexOf(pressed) > -1) {
			console.log("function pressed");
		} else {
			this.model.numberPressed(pressed);
			
		}
		


	}
});