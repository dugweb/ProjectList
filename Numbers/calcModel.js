/* -----------------------------------------
 | CalcModel
 | -----------------------------------------
*/
var calcModel = Backbone.Model.extend({
	operations: ["Multiply", "Divide", "Subtract", "Add", "×", "÷", "-", "+"],
	functions: ["MC", "Mplus", "Mminus", "Mrecall", "Clear", "PlusMinus"],
	defaults: {
		display : 0,
		output: "Ghetto Calculator",
		operator: "",
		stack: []
	},

	pushStack: function(o) {
		var operation = (typeof o === "undefined") ? "" : o;

		var arr = _.clone(this.attributes.stack);
		arr.push(this.attributes.display);
		this.set({stack: arr, operator: operation, newNumber: true});
	},

	numberPressed: function(n) {
		if (this.attributes.newNumber) {
			this.clearDisplay();
			this.set({newNumber: false});
		}
		this.addDisplay(n);
	},

	addDisplay: function(n) {
		var curdisplay = this.attributes.display;
		if (curdisplay == "0") {
			curdisplay = "";
		}
		this.set({display: curdisplay + n});
	},

	clearDisplay: function() {
		this.set({display: "0"});
	},

	calculate: function() {
		var operation = this.attributes.operator;
		var stack = this.attributes.stack;
		var output = 0;

		for (var i = 0; i < stack.length; i++) {
			output += parseInt(stack[i]);
		}

		// TODO get other math functions in here and fix other bugs


		console.log(stack);
		this.set({display: output});
	}



});