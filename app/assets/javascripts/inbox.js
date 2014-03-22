$.ajax({
    url: 'get_inbox',
    method: 'get'
}).success(function(data){
    var count = 0;
    for (var i = 0; i < data.length; i++){
        if (data[i].seen === false){
            count ++
        } 
    }
    $('#inboxA').text('Inbox (' + count + ')' )
})