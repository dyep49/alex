main.service('Dash', ['$http', function($http){

    var historyArray = []
    var savedArray = []

    this.getSavedArray = function(){
        $http({method: 'GET', url: 'users/faved'})
            .success(function(response){
                response.forEach(function(data){
                    savedArray.push(data)
                })
            })
    }

    this.getHistoryArray = function(){
        $http({method: 'GET', url: 'users/history'})
            .success(function(response){
                response.forEach(function(data){
                    historyArray.push(data)
                })
            })
    }

    this.savedArray = function(){
        return savedArray
    }

    this.historyArray = function(){
        return historyArray
    }

}])