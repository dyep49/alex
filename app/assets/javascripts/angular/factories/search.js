main.service('searchService', function(){
    titleArray = []
    urlArray = []
    descriptionArray = []

    this.addTitleResult = function(input){
        titleArray.push(input);
    }
    this.addUrlResult = function(input){
        urlArray.push(input);
    }
    this.addDescriptionResult = function(input){
        descriptionArray.push(input);
    }


    this.getTitleResult = function() {
        return titleArray;
    }
    this.getUrlResult = function(){
    	return urlArray
    }
    this.getDescriptionResult = function(){
    	return descriptionArray
    }
})