main.factory('Dash', ['$http', function($http){
    function Dash(){};

    Dash.prototype.savedArray = function(){
        return $http({method: 'GET', url: 'users/faved'})
    }

    Dash.prototype.historyArray = function(){
        return $http({method: 'GET', url: 'users/history'})
    }

    return new Dash;
}])