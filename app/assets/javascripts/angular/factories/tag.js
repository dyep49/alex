main.service('Tag', ['$http', function($http){
    function Splash(){}

    var output = [];

    this.getInitialStuff = function(input){
        output = []
        $http.get('/tags/' + input)
        .success(function(data){
            for (var i = 0; i < data.length; i++){
                output.push(data[i])
            }
        })
    }

    this.getStuff = function(){
        return output
    }

}])