var should = require("should");
var cal = require("./calculator");
const assert= require("assert");

// cal.AddTwoNumbers("a","b");

// describe("Calculator", function(){
//     describe("when used synchronously",function(){
        
//         it("Should add two numbers correctly", function(){
//            cal.AddTwoNumbers(2,2).should.equal(4); 
//         });
//     })
// });

describe("not equal", function(){
    describe("these two numbers should not equal",function(){
        
        it("should not be equal",function(){
           assert.notEqual(1,2); 
        });
    })
});