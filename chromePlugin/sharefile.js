$(document).ready(function(){
    $(".sharebutton").click(function(){
        
        var currentLocation;
        var target = "Jack";
        
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            
            function(tabs){
                
                currentLocation = tabs[0].url;
                console.log(currentLocation);
                    
                $.post("http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/shareUrl",
                    {
                      location: currentLocation,
                      targetUser: target
                    },
                    function(status){
                        console.log(status);
                        alert("good job");
                    });
                    
                    }
                );
                console.log(currentLocation);
    
//                    $.post("http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/shareUrl",
//                    {
//                      location: testv,
//                      targetUser: target
//                    },
//                    function(status){
//                        console.log(status);
//                        alert("good job");
//                    });
    });
});


//chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
//   function(tabs){
//      alert(tabs[0].url);
//   }
//);
//
$(document).ready(function(){
    $(".readbutton").click(function(){
        $(".showresult").empty();
        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/readmessage', function(data) {
        
            $.each(data.urls, function(index) {
                $('.showresult').append("<p><a target='_blank' href='"+data.urls[index]+"'>"+data.urls[index]+"</p></a>");
            });
        });
    });
});