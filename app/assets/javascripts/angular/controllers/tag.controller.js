main.controller('TagController', ['$scope', '$routeParams', 'Tag', function($scope, $routeParams, Tag) {

    function init(){
        Tag.getInitialStuff($routeParams.tag_name)
    }

    $scope.sortBy = 'created_at'

    $scope.quantity = 15

    $scope.more = function(){
        $scope.quantity += 15
    }

    $scope.mostRecent = function(){
        $scope.sortBy = 'created_at'
    }
    $scope.mostViewed = function(){
        $scope.sortBy = 'view_count'
    }
    

    init()

    $scope.array = Tag.getStuff()

}])

