let a = 10;
let b = 5;
console.log("Arithmetic Operators");
console.log("a = ", a, ", b =", b);
let sum = a+b;
let difference = a-b;
let product = a*b;
let quotient = a /b;
let remainder = a % b;
let exponent = a ** b;
console.log("Arithmetic Operators:");
console.log("sum:",sum);
console.log("difference:",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log("remainder:",remainder);
console.log("exponent:",exponent);
console.log("\n");



//Assignment Operators
let x=10;
x+=5;
x-=3;
x*=2;
x/=4;
x%=3;
console.log("Assignment Operators:");
console.log("x after assignment:", x);
console.log("\n");


//Comparision Operators
let isEqual = (a ==b);
let isStrictEqual=(a===b);
let isNotEqual = (a!=b);
let isStrictNotEqual = (a!==b);
let isGreaterThan = (a>b);
let isLessThan =(a<b);
let isGreaterThanOrEqual = (a>=b);
let isLessThanOrEqual=(a<=b);

console.log("Comparision Operators:");
console.log(isEqual);
console.log(isStrictEqual);
console.log(isNotEqual);
console.log(isStrictNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGreaterThanOrEqual);
console.log(isLessThanOrEqual);
console.log("\n");


//Logical Operators
let andOperator = (a>0 && b>0);
let orOperator = (a>0 || b <0);
let notOperator =!(a<b);
console.log("Logical Operators:");
console.log("AND:",andOperator);
console.log("OR:",orOperator);
console.log("NOT:",notOperator);
console.log("\n");

//Bitwise Operators
let bitwiseAnd = a&b;
let bitwiseOr= a |b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a<<1;
let rightShift = a >>1;

console.log("Bitwise Operators:");
console.log("And:",bitwiseAnd);
console.log("Or:",bitwiseOr);
console.log("Xor:",bitwiseXor);
console.log("Not:",bitwiseNot);
console.log("leftshift:",leftShift);
console.log("rightshift:",rightShift);
console.log("\n");

//Ternary Operator
let age =18;
eligibility =(age>=18)?"Eligible to vote" : "Not eligible to vote";

console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");


//TypeOf Operator
let variableType = typeof a;
console.log("Type of variable 'a':", variableType);
console.log("\n");