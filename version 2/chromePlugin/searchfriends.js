$(document).ready(function(){
    
    $('.keywords').keyup(function(){
        var keywords = $('.keywords').val();
        
        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/searchfriends', { keywords: keywords }, function(data) {
            $(".friendsresult").empty();

            
            $.each(data.getusername, function(index) {
                
                member = data.getusername[index][0];
                userphoto = data.getusername[index][1];
                firstname = data.getusername[index][2];
                lastname = data.getusername[index][3];
            
                $(".friendsresult").append("<div class='row'><div class='col-xs-3'><img src='"+userphoto+"' class='userimage'></div><div class='col-xs-7'><label for='"+member+"'>"+firstname+" "+lastname+"</label></div><div class='col-xs-2'><input type='checkbox' id='m"+member+"' value='"+member+"' name='friends'></div></div><hr>");

                console.log(data.getusername[index]);
                
                
            });
            
        });
     });
    
    
    $(".searchfriends").click(function(){
        var keywords = $('.keywords').val();
        
        console.log(keywords);

        $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/searchfriends', { keywords: keywords }, function(data) {
            $(".friendsresult").empty();
            console.log(keywords);
            $.each(data.getusername, function(index) {
                
                member = data.getusername[index][0];
                userphoto = data.getusername[index][1];
                firstname = data.getusername[index][2];
                lastname = data.getusername[index][3];
                          
                $(".friendsresult").append("<div class='row'><div class='col-xs-3'><img src='"+userphoto+"' class='userimage'></div><div class='col-xs-7'><label for='"+member+"'>"+firstname+" "+lastname+"</label></div><div class='col-xs-2'><input type='checkbox' id='m"+member+"' value='"+member+"' name='friends'></div></div><hr>");

                console.log(data.getusername[index]);
                
                
            });
            
        });
        

    });
});
