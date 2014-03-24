main.service('searchService', function(){
    var titleArray = []
    var urlArray = []
    var descriptionArray = []

    this.addTitleResult = function(input){
        titleArray.splice(0, descriptionArray.length)
        titleArray.push(input)
    }
    this.addUrlResult = function(input){
        urlArray.splice(0, descriptionArray.length)
        urlArray.push(input)
    }
    this.addDescriptionResult = function(input){
        descriptionArray.splice(0, descriptionArray.length)
        descriptionArray.push(input)
    }

    this.getTitleResult = function() {
        return titleArray
    }
    this.getUrlResult = function(){
    	return urlArray
    }
    this.getDescriptionResult = function(){
    	return descriptionArray
    }
})