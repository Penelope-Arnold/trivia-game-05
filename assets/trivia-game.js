
var quizQuestion = [
    {
        question:"Which state is the birthplace of the Cheeseburger?",
        options: ["New York", "North Carolina", "Colorado"],
        correct: "Colorado"
    },

    {
        question:"What is the National dish of England?",
        options:["Bangers & Mash", "Fish and Chips", "Chicken Tikka Masala"],
        correct:"Chicken Tikka Masala"
    },

    {
        question: "What is the most ordered food in America?",
        options:["pizza","cheeseburger","fried chicken"],
        correct: "fried chicken"
    },

    {
        question: "What food was first consumed on the moon?",
        options: ["turkey", "ice cream", "mashed potatos"],
        correct:"turkey"
    },

    {
        question: "Which food item was origionally used to treat diarrhea?",
        options: ["mustard","ketchup", "bourbon"],
        correct: "ketchup"
    },

    {
        question:"What is the National Drink of Turkey?",
        options:["Ouzo", "Raki", "goat milk"],
        correct:"Raki"
    },

    {
        question:"What food is Peru best known for?",
        options: ["corn", "potatos", "ceeviche"],
        correct:"ceviche"
    },

    {
        question: "What is the State food of South Carolina?",
        options:["friend chicken", "grits","boiled peanuts"],
        correct:"boiled peanuts"
    },

    {
        question: "What was the origional flavor for the Twinky filling?",
        options:["banana cream", "vanilla", "sassafras"],
        correct: "banana cream"
    },

    {
        question: "What does the Slavic word vodka translate to in English?",
        options: ["little water","silly water","naughty water"],
        correct: "little water"
    }
];
console.log(quizQuestion);


var counter = 15;
var currentQuestion = 0;
var score = 0;
var loss = 0;
var wins = 0;
var timer;
var options = quizQuestion.options;


function loadQuestion(){
    counter = 5;
    timer = setInterval(countDown, 1000);
    var question = quizQuestion[currentQuestion].question;
    var options = quizQuestion[currentQuestion].options;

    
    $('#time').html('Timer: ' + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadOptions(options)}
    `);
}
loadQuestion();

function loadOptions(options){
    var result = "";

    for(i=0; i < options.length; i++){
        result += `<button class="option" data-answer="${options[i]}">${options[i]}</button>`;
    }

    return result;

}



$(document).on("click", ".option", function(){
    
    var choiceAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestion[currentQuestion].correct;
    console.log("click", choiceAnswer);
    if (choiceAnswer === correctAnswer){
        score ++
        console.log("winner");
        setTimeout(nextQuestion, 3 * 1000)
    } else {
        loss ++
        console.log("loser");
        setTimeout(nextQuestion, 3 * 1000)
    }
    clearInterval(timer);
    
})

function nextQuestion(){
    var isQuestionOver = (quizQuestion.length - 1) === currentQuestion;
    if(isQuestionOver){
        displayResult();

    }else{
    currentQuestion ++;
    loadQuestion();
    }
    
}

function displayResult(){
    
    var result = 
    `<p> You got ${score} question(s)right</p>
    <p> You missed ${loss} question(s)</p>
    <button id="reset" class"btn btn-primary"> Play Again </button>
    `;
    $("#game").html(result) 
}

function countDown() {
    counter--;

    $('#time').html('Timer: ' + counter);

    if (counter === 0) {
        timeUp();
    }
}
function timeUp() {
    clearInterval(timer);

    loss++;

    nextQuestion();
    preloadImage('lost');
    setTimeout(nextQuestion, 3 * 1000);
    
} 

function reset(){
    $(document).on(`click`, `#reset`, function(){
        currentQuestion = 0;
        counter = 0; 
        wins = 0;
        loss =0
    })
}
reset();
