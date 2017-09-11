var express = require('express');
var path = require('path');
var sassCompiler 	= require('node-sass-middleware');
var device = require('express-device');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');
app.locals.cdn = "https://d14x7hkpd082ov.cloudfront.net";

// SCSS to CSS compiler
app.use(sassCompiler({
	/* Options */
	src: path.join(__dirname, 'public/styles/scss'),
	dest: path.join(__dirname, 'public/styles'),
	debug: true,
	// outputStyle: 'compressed',
	// outputStyle: 'extended',
	outputStyle: 'expanded',
	prefix: '/styles'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(methodOverride());
app.use(device.capture());
device.enableDeviceHelpers(app);

require('./routes')(app);

app.use('/', express.static(path.join(__dirname, 'public')));

// T-shirt design project
app.use('/projects/t-shirt-design-editor', require('./projects/t-shirt-design-editor/app'));

// Responsive UI project
app.use('/projects/responsive-design', express.static(path.join(__dirname, 'projects/responsive_ui')));

// GitHub user search project
app.use('/projects/github-users', express.static(path.join(__dirname, 'projects/github_users_search')));

// Analytics dashboard project
app.use('/projects/analytics-dashboard', express.static(path.join(__dirname, 'projects/analytics_dashboard')));

// Car catalogue project
app.use('/projects/car-catalogue', express.static(path.join(__dirname, 'projects/car_catalogue')));

// Crashing planes project
app.use('/projects/flight-search', express.static(path.join(__dirname, 'projects/crashing-planes')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	// res.render('error');
});

module.exports = app;