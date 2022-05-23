// function printRandomNumbers() {
//     var rndNum = Math.floor(Math.random()*11) 
//     return rndNum
// }
// console.log(printRandomNumbers());





// function printRandomNumberBetweenZeroToNumber(rndnumber) {
//     var rndNum = Math.floor(Math.random()*rndnumber)
//     return rndNum
// }
// console.log(printRandomNumberBetweenZeroToNumber(5));





// function printSucsessOrFail(userNumber) {
//     var  userNumber = +prompt()
//     var rndNum = Math.floor(Math.random()*11)
//     if (rndNum == userNumber) {
//         console.log("Sucsess");
//     }
//     else{
//         console.log("Fail");
//     }
// }
// printSucsessOrFail()




// function pushNumbersToArray() {
//     var array = []
//     for (var i = 0; i < 10; i++) {    
//         var rndNum = Math.floor(Math.random()*101)
//             array.unshift(rndNum)       
//     }
//     return array
// }
// console.log(pushNumbersToArray());






// function printName(params)

// function returnBiggerNumber() {
//     var userNumber =+prompt()
//     var rndNum = Math.floor(Math.random()*11)
//     return Math.max(userNumber,rndNum)
// }
// console.log(returnBiggerNumber());





// function printLowerNumber() {
//     var LowerNum = 0
//     for (var i = 0; i < 5; i++) {
//     var userNumber = +prompt()  
    
// }
//     console.log(userNumber);
// }
// printLowerNumber()






// function printMaxOrMinNumber() {
//     var userNumber = +prompt()
//     var rndNumber = Math.floor(Math.random()*101)
//     if (userNumber%2==0) {
//         return Math.min(rndNumber,userNumber)
//     }
//     else{
//         return Math.max(rndNumber,userNumber)
//     }
// }
// console.log(printMaxOrMinNumber());





// function randomArray() {
//     var array = []        
//     for (var i = 0; i < Math.floor(Math.random()*365); i++) {
//         var rndNumber = Math.floor(Math.random()*873)
//         array.unshift(rndNumber)
//     }
//     console.log(array);
// }
// console.log(randomArray());





function printIndex(array) {
    var index = Math.floor(Math.random()*array.length)
    console.log(array[index]); 
}
printIndex([4,5,4,8,7,2,6,4,4,4,2,2]);


// function changeChartFromSmallToBig() {
//     var userName= prompt()
//     var i = Math.floor(Math.random()*userName.length)
//     userName[i].toUpperCase()
//     console.log(userName);
//     }
// console.log(changeChartFromSmallToBig());

// function printNameOrAge() {
//     var rndNum = Math.floor(Math.random()*101)
//     var userName = prompt("enter your name")
//     var userName1 = prompt("enter your name")
//     var userAge = +prompt("enter your age")
//     var userAge1 = +prompt("enter your age")
//     for (var i = 0; i < 1; i++) {
//         if (userName[i]==userName1[i]) {
//             console.log(rndNum);
//         }
//         if (userName[--userName.length]==userName1[--userName.length]) {
//             console.log(userName[--userName.length], "equal" ); 
//         }
//         else{
//             console.log(userAge1,userAge);
//         }
//     }
// }
// printNameOrAge()

// function printTextTillThenEnd() {
//     var userName = prompt()
//     var rndNum = Math.floor(Math.random()*6)
//     console.log(userName.substring(0,rndNum));
// }
// printTextTillThenEnd()

// function chackIfUserNumberModuloTree() {
//     var userNumber = +prompt()
//     var rndNum = Math.floor(Math.random()*userNumber)
//     for (var i = 0; i < rndNum; i++) {
//         if (userNumber%3==0) {
//             console.log(rndNum);
//         }        
//         else{
//             console.log(rndNum*2,3.14);
//         }
//     }
// }
// chackIfUserNumberModuloTree()