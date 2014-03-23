main.controller('DashController', ['$scope', 'Dash', function($scope, Dash){

    function init(){
        Dash.getSavedArray()
        Dash.getHistoryArray()
    }
    
    init()

    $scope.savedArray = Dash.savedArray()
    $scope.historyArray = Dash.historyArray()

}])