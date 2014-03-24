main.controller('TagController', ['$scope', '$routeParams', 'Tag', function($scope, $routeParams, Tag) {

    function init(){
        Tag.getInitialStuff($routeParams.tag_name)
    }

    init()

    $scope.array = Tag.getStuff()

}])
