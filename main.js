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
function discountPercentage(amt, discount) {
  if (discount>100 || discount<0) {
    console.log("Invalid discount, brah")
  }
    else
      console.log("Your discount is $"+ (amt * (discount/100))+".")
  }
discountPercentage(50, 20)

//exercise 4
function stringCapitalize(str) {

    console.log(str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
}
stringCapitalize("i have a cat")

//exercise 5
function evenIntegers(num) {
  for (i = 0; i <= num; i+=2) {
    if (i % 2 === 0) {console.log(i);
    }
}
}
console.log(evenIntegers(34))

//exercise 6
function isDivisible(var1, var2) {
  if (var1 % var2 === 0) {
    return(true)
  }
  else {
    return(false)
  }
}
console.log(isDivisible(9, 3))
console.log(isDivisible(9, 2))

//exercise 7
// Write a function called `oddNumbers` that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.
function oddNumbers (int) {
  
}
