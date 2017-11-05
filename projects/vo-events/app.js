var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var compression = require('compression');
// var expressValidator = require('express-validator');
var sassCompiler = require('node-sass-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
	app.locals.cdn = "https://d14x7hkpd082ov.cloudfront.net/projects/vo-events";
}
else {
	app.locals.cdn = "/courtside";
}

app.locals.assets = "/projects/vo-events";

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

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(expressValidator() ); // Add this after the bodyParser middleware!
// app.use(cookieParser());

// app.use(compression()); //Compress all routes

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

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