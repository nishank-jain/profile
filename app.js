var express = require('express');
var path = require('path');

var app = express();

// T-shirt design project
var t_shirt_design_editor = require('./projects/t-shirt-design-editor/app');
app.use('/t-shirt-design-editor', t_shirt_design_editor);

// Responsive UI project
app.use('/responsive-ui', express.static(path.join(__dirname, 'projects/responsive_ui')));

// GitHub user search project
app.use('/github-users', express.static(path.join(__dirname, 'projects/github_users_search')));

// Analytics dashboard project
app.use('/analytics-dashboard', express.static(path.join(__dirname, 'projects/analytics_dashboard')));

// Car catalogue project
app.use('/car-catalogue', express.static(path.join(__dirname, 'projects/car_catalogue')));

// Crashing planes project
app.use('/flight-booking', express.static(path.join(__dirname, 'projects/crashing-planes')));

module.exports = app;