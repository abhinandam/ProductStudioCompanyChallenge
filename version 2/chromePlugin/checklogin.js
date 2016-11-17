$(document).ready(function(){
    $(".postbtn").click(function(){
        
        var username = $('#username').val();
        var password = $('#password').val();
        
        $.post("http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/checklogin",
               {
                    username: username,
                    password: password
                },
                
               function(status){
                    console.log(status);
                    localStorage.setItem("username", username); 
                    window.location.href="popup.html";
                });
                    
        });
        
//        if(username == "jack" && password=="jack"){
//            localStorage.setItem("username", username); 
//            window.location.href="popup.html";
//        }
//        
//        if(username == "rui" && password=="rui"){
//            localStorage.setItem("username", username); 
//            window.location.href="popup.html";
//        }
    });
//});


$(document).ready(function(){
    var user = localStorage.getItem("username");
    console.log(user);
    $('#myname').html(user);
});


$(document).ready(function(){
    $(".logout").click(function(){
        localStorage.clear();
        window.location.href="login.html";
        
    });
});


$(document).ready(function(){
    $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/allmember', function(data) {
        $.each(data.members, function(index) {
            member = data.members[index];
            
            $(".friendsresult").append("<div><label for='"+member+"'>"+member+"</label><input type='checkbox' id='m"+member+"' value='"+member+"' name='friends'></div><hr>");
            
            console.log(member);
        });
            
    }); 
});


