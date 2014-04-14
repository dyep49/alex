main.controller('TagController', ['$scope', '$routeParams', 'Tag', '$interval', function($scope, $routeParams, Tag, $interval) {

    function init(){
        Tag.getInitialStuff($routeParams.tag_name)
    }



    $scope.sortBy = 'created_at'

    $scope.tag = $routeParams.tag_name

    $scope.quantity = 15

    $scope.more = function(){
        $scope.quantity += 15
    }

    $scope.mostRecent = function(){
        $scope.array = $scope.save
        $scope.sortBy = 'created_at'
    }
    $scope.mostViewed = function(){
        $scope.array = $scope.save
        $scope.sortBy = 'view_count'
    }

    $scope.mostMonth = function(){
        var new_array = []
        var currentDate = new Date();
        for (var i = 0; i < $scope.save.length; i ++) {
            var oldDate = new Date($scope.save[i].created_at)
            if ((oldDate - currentDate) < 18144000000){
                new_array.push($scope.save[i])
            }
        }
        $scope.array = new_array
        $scope.sortBy = 'view_count'
    }

    $scope.mostWeek = function(){
        var new_array = []
        var currentDate = new Date();
        for (var i = 0; i < $scope.save.length; i ++) {
            var oldDate = new Date($scope.save[i].created_at)
            if ((oldDate - currentDate) < 604800000){
                new_array.push($scope.save[i])
            }
        }
        $scope.array = new_array
        $scope.sortBy = 'view_count'
    }
    

    init()

    $scope.save = Tag.getStuff()
    $scope.array = $scope.save

}])

