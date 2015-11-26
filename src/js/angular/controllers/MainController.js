app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	//$scope.title = 'A Title set in the controller';
	
	var url = 'https://api.instagram.com/v1/users/36494182/media/recent/?callback=JSON_CALLBACK&count=12&client_id=e14d5cc0f5ab4001959555ced2ee34e6'; 
	
	$http.jsonp(url)
		.success(function(data) {
			
			var next_max_id = data.pagination.next_max_id;
			
			$scope.counter = 0;
			$scope.position = ['', '', next_max_id];
			$scope.navgation = { 'previous': $scope.position[2], 'current': $scope.position[1], 'next': $scope.position[0] };
			
			console.log($scope.position);
			
			
			//console.log(data);
			$scope.images = data.data;
			$scope.pagination_next = data.pagination.next_max_id;
			$scope.pagination_previous = '';
			
			
			
			//console.log($scope.images);
		})
		.error(function(data) {
			$scope.data = "Request failed";
			//console.log($scope.data);
		});
		
	$scope.next = function(next_max_id) {
		$scope.counter = $scope.counter + 1;
		
		//alert(url + '&max_id=' + next_max_id);
		$http.jsonp(url + '&max_id=' + next_max_id)
		.success(function(data) {
			$scope.position.push(data.pagination.next_max_id);
			var previous_id = $scope.position.slice($scope.counter, $scope.counter + 3);
			
			
			//console.log(data);
			$scope.images = data.data;
			$scope.pagination_next = data.pagination.next_max_id;
			$scope.pagination_previous = previous_id[0];
			
			
			
			console.log($scope.position.slice(-3));
			console.log($scope.counter);
		})
		.error(function(data) {
			$scope.data = "Request failed";
			//console.log($scope.data);
		});
	};
	
	$scope.previous = function(next_max_id) {
		$scope.counter = $scope.counter - 1;
		
		$http.jsonp(url + '&max_id=' + next_max_id)
		.success(function(data) {
			$scope.position.pop();
			var previous_id = $scope.position.slice($scope.counter, $scope.counter + 3);
			
			//console.log(data);
			$scope.images = data.data;
			$scope.pagination_next = data.pagination.next_max_id;
			$scope.pagination_previous = previous_id[0];
			
			console.log($scope.counter);
		})
		.error(function(data) {
			$scope.data = "Request failed";
			//console.log($scope.data);
		});
	};
	
}]);

app.controller('FlickrController', ['$scope', '$http', function($scope, $http) {
	$scope.title = 'A Title set in the controller';
	
	var url = 'https://api.flickr.com/services/feeds/photos_public.gne?id=37797887@N04&format=json&jsoncallback=JSON_CALLBACK'; 
	$http.jsonp(url)
		.success(function(data) {
			console.log(data);
			$scope.images = data.items;
			
			console.log($scope.images);
		})
		.error(function(data) {
			$scope.data = "Request failed";
			console.log($scope.data);
		});
}]);

