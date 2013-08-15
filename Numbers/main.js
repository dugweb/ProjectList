function initCalc() {
	window.app = {
		models: {},
		views: {},
		collections: {}
	};

	app.models.calc = new calcModel();
	app.views.calcView = new calcDisplayView({
		model: app.models.calc,
		el: '#output',
		template: "#calcDisplay"
	});
	// app.views.calcView.render();
	console.log(app.views.calcView);
	
}