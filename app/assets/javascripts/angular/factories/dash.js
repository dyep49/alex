main.service('Dash', ['$http', function($http){
    function Dash(){}

    var historyArray = []
    var savedArray = []

    Dash.prototype.init = function(){
        savedArray.push($http({method: 'GET', url: 'users/faved'}))
        historyArray.push($http({method: 'GET', url: 'users/history'}))
    }

    Dash.prototype.savedArray = function(){
        return historyArray
    }

    Dash.prototype.historyArray = function(){
        return savedArray
    }

    return new Dash
}])