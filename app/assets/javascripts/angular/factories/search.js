main.service('searchService', function(){
    var array = []

    function addResult(input){
        array.push(input)
    } 

    function getResult() {
        return array
    }
}