const fs = require("fs");

const file = fs.createWriteStream("./writer.txt");

var WriteData = function(){
    for(let i = 0; i<= 10; i++){
        file.write('this is some write line text \n');
    }

    file.end();
}

module.exports = {
    WriteData: WriteData
}

