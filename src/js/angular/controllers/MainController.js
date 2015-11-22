app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.title = 'A Title set in the controller';
	
	var url = 'https://api.instagram.com/v1/users/36494182/media/recent/?callback=JSON_CALLBACK&client_id=e14d5cc0f5ab4001959555ced2ee34e6'; 
	$http.jsonp(url)
		.success(function(data) {
			console.log(data);
			$scope.images = data.data;
			
			console.log($scope.images);
		})
		.error(function(data) {
			$scope.data = "Request failed";
			console.log($scope.data);
		});
}]);
