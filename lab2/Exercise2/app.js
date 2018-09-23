var compare = require('./comparer');
var cal = require('./calculator');

console.log("comparing numbers 5,10:");

if(compare.AreNumberEqual(5,10)){
    console.log(cal.Add(5,10));
}
else{
    console.log(cal.Subtract(5,10))
}

console.log("comparing numbers 5,5:"); 
if(compare.AreNumberEqual(5,5)){
    console.log(cal.Add(5,5));
}
else{
    console.log(cal.Subtract(5,5))
}