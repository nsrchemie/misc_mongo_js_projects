Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('photos', {
		path:'/',
		template:'photogal'
	});
	this.route('addphotos', {
		path:'/add'.
		template: 'addphotos',
	});
});
