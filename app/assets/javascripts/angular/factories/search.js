main.service('searchService', function(){
    array = []

    this.addResult = function(input){
        array.push(input);
    }

    this.getResult = function() {
        return array;
    }
})