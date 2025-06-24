//if, else-if, else 

let age=18;
if(age<18) {
    console.log("You are a minor");
}
else if(age>=18 && age <65) {
    console.log("You are an adult");
}
else {
    console.log("You are a senior citizen");
}


//switch

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");

}



//loops
console.log("for loop");
for(let i=0;i<5;i++) {
    console.log("Iteration:",i);
}
console.log("\n");

//while loop
console.log("while loop");
let j=0;
while(j<5) {
    console.log("While loop Iteration:", j);
    j++;
}
console.log("\n");

//do-while loop 