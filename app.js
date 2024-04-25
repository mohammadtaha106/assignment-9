//Coding Question 1: Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer

function roundNum() {
    let roundinput = document.getElementById("roundInput")
    let result= Math.round(roundinput.value)
    roundinput.value = result
    
    
    
}
//Coding Question 2: Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.

document.write("<br>")
function generateRandomInRange(){
    
let x = Math.floor(Math.random()*100)
let y = Math.floor(Math.random()*100)
let result = Math.max(x,y)
let result2 = Math.min(x,y)


document.write(`<h3>Maximum value is ${result} and Minimum value is ${result2}</h3>`);
}
generateRandomInRange()


//Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
let strInput = prompt("Enter a message")
function convertToNumber() {
    let convertNumber = parseInt(strInput)
    console.log(convertNumber);
}
convertToNumber()


//Coding Question 4 :Implement a JavaScript function called truncateDecimal(num, decimals) that truncates a number num to a specified number of decimals.Hint: You may want to multiply the input number by a power of 10, truncate the decimal part, and then divide it back to the original power of 10 to achieve the desired truncation.
function truncateDecimal(num, decimals){
    const powerOfTen = Math.pow(10,decimals)
   return  Math.trunc(num*powerOfTen)/powerOfTen
}
document.write(truncateDecimal(3.148456,3))



function formatNumber(num,decimalPlaces){
if(isNaN(num)){
    return 'invalid input'
}
const formattedNum = Number(num).toFixed(decimalPlaces)
return formattedNum;

}

document.write(`<h3> ${formatNumber(3.14279767, 2) }</h3>`);

document.write(`<h3>${formatNumber(123.6777, 3)}</h3>`);

document.write(`<h3> ${formatNumber("Hello", 2)}</h3>`);