var moment = require("moment");


var greet = function () {
    var day = moment().format('l');
    var time = moment().format('LTS')
    console.log(day + " " + time);
}

greet(); 
