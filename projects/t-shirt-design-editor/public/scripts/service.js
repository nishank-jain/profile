fp.factory('RequestModel', ['$http', 'Upload', function($http, Upload) {
	var model = new RequestModel($http, Upload);
	return model;
}]);