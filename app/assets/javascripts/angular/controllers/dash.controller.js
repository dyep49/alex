main.controller('DashController', ['$scope', 'Dash', function($scope, Dash){

    function init(){
        Dash.init()
    }
    init()

    $scope.savedArray = Dash.savedArray()
    $scope.historyArray = Dash.historyArray()

}])