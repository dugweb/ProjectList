/* -----------------------------------------
 | calcDisplayView
 | -----------------------------------------
*/
var calcDisplayView = Backbone.View.extend({
	tagname: "p",
	classname: "output",
	template: "",

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
		this.template = _.template( $(this.options.template).html() );
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}

});