$(document).ready(function(){
    
    $('.keywords').keyup(function(){
        var keywords = $('.keywords').val();
        
        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/searchfriends', { keywords: keywords }, function(data) {
            $(".friendsresult").empty();

            
            $.each(data.getusername, function(index) {
                
//                console.log(index);               
//                $(".friendsresult").append("<div><div id='"+data.getusername[index]+"'>"+data.getusername[index]+"</div><hr>");
                
                member = data.getusername[index];
            
                $(".friendsresult").append("<div><label for='"+member+"'>"+member+"</label><input type='checkbox' id='m"+member+"' value='"+member+"' name='friends'></div><hr>");

                console.log(data.getusername[index]);
                
                
            });
            
        });
     });
    
    
    $(".searchfriends").click(function(){
        var keywords = $('.keywords').val();
        
        console.log(keywords);
        
//        $.post("http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/searchfriends",
//               {
//                    keywords: keywords
//                },
//               function(result){
//                    console.log(result);
//                    $(".friendsresult").append(result);
//            });
        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/searchfriends', { keywords: keywords }, function(data) {
            $(".friendsresult").empty();
            console.log(keywords);
            $.each(data.getusername, function(index) {
                
                console.log(index);
                
                $(".friendsresult").append("<div><div id='"+data.getusername[index]+"'>"+data.getusername[index]+"</div><hr>");

                console.log(data.getusername[index]);
                
                
            });
            
        });
        

    });
});
