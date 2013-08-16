/* -----------------------------------------
 | calcDisplayView
 | -----------------------------------------
*/
var calcDisplayView = Backbone.View.extend({
	tagName: "li",
	className: "output",
	template: "",

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
		this.template = _.template( $(this.options.templatesrc).html() );
		console.log($(this.options.templatesrc));
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}

});