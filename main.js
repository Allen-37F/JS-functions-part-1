//exercise 1
function sum(a, b) {
  console.log(a + b);
}
sum(3, 5)

//exercise 2
function isEqual(a, b) {
  if (a === b) {
    return(true)}
    else {
      return(false);
    }
  }
console.log(isEqual(4, 5))

//exercise 3
// Define a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
function discountPercentage(amt, discount) {
  if (discount>100 || discount<0) {
    console.log("Invalid discount, brah")
  }
    else
      console.log("Your discount is $"+ (amt * (discount/100))+".")
  }
discountPercentage(50, 20)

//exercise 4
// Define a function called `stringCapitalize` that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.
function stringCapitalize(str) {

    console.log(str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
}
stringCapitalize("i have a cat")

//exercise 5
// Define a function called `evenNumbers` that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.
function evenIntegers(num) {
  for (i = 0; i <= num; i+=2) {
    if (i % 2 === 0) {console.log(i);
    }
} 
}
console.log(evenIntegers(34))
