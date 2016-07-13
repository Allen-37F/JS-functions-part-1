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
