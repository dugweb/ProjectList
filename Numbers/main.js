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
		templatesrc: "#calcDisplay"
	});

	app.views.calcButtons = new CalcButtons({
		model: app.models.calc,
		el: '#buttons'
	});

	app.views.calcView.render();
	
}