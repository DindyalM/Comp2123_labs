
var greet = function(msg){
    console.log(msg)  

}



var getCurrentDateAndTime = function (){
    var currentdate = new Date(); 
    var datetime =  "Current Date:" + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " Current Time:"  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    return datetime;
}


var msg = getCurrentDateAndTime();
greet(msg);