main.controller('DashController', ['$scope', 'Dash', function($scope, Dash){

    $scope.savedArray = Dash.savedArray()

    $scope.historyArray = Dash.historyArray()

}])