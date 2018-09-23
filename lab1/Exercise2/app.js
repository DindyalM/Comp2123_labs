
var greet = function(msg){
    for(var i = 0; i < 10 ; i++) {
        console.log(msg)  
    }
}



var getCurrentDateAndTime = function (){
    var currentdate = new Date(); 
    var datetime =    currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    return datetime;
}


var msg = getCurrentDateAndTime();
greet(msg);