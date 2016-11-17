$(document).ready(function(){
    $(".sharebutton").click(function(){
        
        var currentLocation;
//        var target = "Jack";
        var sentbywhom = localStorage.getItem("username");
        
        
        var targetGroup = [];
        
        $.each($("input[name='friends']:checked"), function(){
            targetGroup.push($(this).val());
        });
        
        console.log(targetGroup[0]);
        console.log(targetGroup[1]);
        
        
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            
            function(tabs){
                
                currentLocation = tabs[0].url;
                title = tabs[0].title;
                favIconUrl = tabs[0].favIconUrl;
            
                console.log(currentLocation);
                console.log(tabs[0]);
                    
                $.post("http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/shareUrl",
                    {
                      location: currentLocation,
                      targetUser: JSON.stringify(targetGroup),
                      sentbywhom: sentbywhom,
                      favIconUrl: favIconUrl,
                      title: title
                    },
                    function(status){
                        console.log(status);
//                        alert("good job");
                        $("#message").html("successful!");
                    });
                    
                    }
                );
                console.log(currentLocation);
    
    });
});

$(document).ready(function(){
    $(".readbutton").click(function(){
        $(".showresult").empty();
        var currUser = localStorage.getItem("username");
        
        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/readmessage', { currUser: currUser }, function(data) {
//        
//            $.each(data.urls, function(index) {
//                $('.showresult').append("<div><img src='"+data.urls[index][4]+"'><p><a target='_blank' href='"+data.urls[index][3]+"'>"+data.urls[index][5]+"</a></p><p><a target='_blank' href='"+data.urls[index][3]+"'>"+data.urls[index][3]+"</a></p></div>");
//            });
                    
            $.each(data.urls, function(index) {
                $('.showresult').append("<div><img src='"+data.urls[index][4]+"'><p><a target='_blank' href='"+data.urls[index][3]+"'>"+data.urls[index][5]+"</a></p><label>SHARE BY: "+data.urls[index][1]+"</label></div><hr>");
            });
        });
    });
});
