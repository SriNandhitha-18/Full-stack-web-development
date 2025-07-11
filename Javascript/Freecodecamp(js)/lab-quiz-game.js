** start of script.js **

let questions=[
{
 category:"color? ", 
 question:"what is your favorite color?",
 choices:["blue","pink","green"],
 answer:"green",
},
{
 category:"living place?", 
 question:"where are you living?",
 choices:["Bursa","Ankara","Istanbul"],
 answer:"Istanbul",
},
{
 category:"Field of study?", 
 question:"Do you grageuated?",
 choices:["computer","Math","teacher"],
 answer:"computer",
},
{
   category:"cooking?", 
 question:"What is your favorite food?",
 choices:["Pizza","Ege","Rice"],
 answer:"Ege",
},
{
 category:"sports?", 
 question:"What is your favorite sport?",
 choices:["football", "volleyball","swimming"],
 answer:"volleyball",
}
];
function getRandomQuestion(questions) {
    let randomQuestionObj = Math.floor(Math.random() * questions.length);
    return questions[randomQuestionObj];
};
function getRandomComputerChoice(gRandomQuestion) {
    let random = Math.floor(Math.random() *gRandomQuestion.length);
    return gRandomQuestion[random];
};

function getResults(gRandomQuestion, pcChoice) {
    let answer=gRandomQuestion.answer;
   return pcChoice == answer? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${answer}`};
//FUNCTION CALL
let gRandomQuestion = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(gRandomQuestion.choices);
let result=getResults(computerChoice,gRandomQuestion);
console.log(result);


** end of script.js **

