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
});


//$(document).ready(function(){
//    var user = localStorage.getItem("username");
//    console.log(user);
//    $('#myname').html(user);
//});


$(document).ready(function(){
    $(".logout").click(function(){
        localStorage.clear();
        window.location.href="login.html";
        
    });
});


$(document).ready(function(){
    $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/allmember', function(data) {
        $.each(data.members, function(index) {
            member = data.members[index][0];
            userphoto = data.members[index][1];
            firstname = data.members[index][2];
            lastname = data.members[index][3];
            
            $(".friendsresult").append("<div class='row'><div class='col-xs-3'><img src='"+userphoto+"' class='userimage'></div><div class='col-xs-7'><label for='"+member+"'>"+firstname+" "+lastname+"</label></div><div class='col-xs-2'><input type='checkbox' id='m"+member+"' value='"+member+"' name='friends'></div></div><hr>");
            
        });
            
    }); 
});


//$(document).ready(function(){
//    count = 0;
//    var currUser = localStorage.getItem("username");
//    
//    $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/readmessage', { currUser: currUser }, function(data) {
//        $.each(data.urls, function(index) {
//            
//            if(data.urls[index][6]== 0){
//                count = count + 1;
//                console.log(count);
//            }
//            
//        });
//        
//        $(".urnums").html(count);
//            
//    }); 
//});


function myFunction() {
    setInterval(checkForUpdates, 300);
}

myFunction();

function checkForUpdates() {
    count = 0;
    var currUser = localStorage.getItem("username");
    
    $.getJSON('http://ec2-35-163-235-152.us-west-2.compute.amazonaws.com/readmessage', { currUser: currUser }, function(data) {
        $.each(data.urls, function(index) {
            
            if(data.urls[index][6]== 0){
                count = count + 1;
            }
            
        });
        
        $(".urnums").html(count);
            
    }); 
}


