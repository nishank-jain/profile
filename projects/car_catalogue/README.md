# car_catalogue

An AngularJS car catalogue with instant filtering.

# About

This is an example of complete UI side filtering using Angular filters.

# Requirements

You need git to clone this repository. You can get git from http://git-scm.com/.

# Running

git clone https://github.com/nishankjain/car_catalogue.git

Open index.html in your browser.

# Filters

This app shows a way to implement completely client-side filtering of results using a custom angular filter. The filter takes in the original array of cars and returns a list of cars filtered according to the filters selected from the filtering panel. The same effect could also be easily achieved by repopulating the cars array in the controller itself but it makes for a more elegant solution to design a separate module for array filtering which can be reused in multiple places in the app.