main.controller('FavoritesController', ['$scope', '$http', 'Pin', function($scope, $http, Pin){

	function init(){
		$http({
			url: 'users/favorites',
			method: 'GET'
		})
			.success(function(data){
				data.forEach(function(fav){
					$scope.favorites.push(Pin.show(fav.pin_id))
				})
			})
	}

	$scope.favorites = []


	init();

}])