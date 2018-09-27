var handleCounter = function(result){
    console.log("the callback count is:" + result);
}

var callbackLoop = function(num, handleCounter){
    for(let i = 1; i < num; i++){
        handleCounter(i);
    }
    console.log("*** exiting callbackloop *****")
}

callbackLoop(5, handleCounter);