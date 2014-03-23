main.factory('Dash', ['$resource', function($resource){
    function Dash(){};

    Dash.prototype.savedArray = function(){
        return null
    }

    Dash.prototype.historyArray = function(){
        return null
    }

    return new Dash;
}])