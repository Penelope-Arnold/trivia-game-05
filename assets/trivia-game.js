var quizQuuestion = [
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


var counter = 30;
var currentQuestion = [];
var score = 0;
var loss = 0;
var wins = 0;
var timer;


function timesUp(){
    clearInterval(timer);
    loss++;
    nextQuestion();
}

function nextQuestion(){
    var gameOver = (quizQuestions.length -1) === currentQuestion;
    if (gameOver){
        Results();
    } else {
        currentQuestion++; 
        loadQuestion();
    }
}


function countDown(){
    counter --;
    $("#time").html("Timer: " + counter);
    if(counter === 0){
        timesUp();
    }
}

function loadQuestion(){
    counter = 30;
    timer = setInterval(countDown, 1000);
    var question = quizQuestion[currentQuestion].question;
    var choices = quizQuestion[currentQuestion].options;

    
    $("#time").html("Timer: " + counter);
    $("#game").html(<h4>{question}</h4>
        ${loadChoices(choices)};
}
loadQuestion();

function loadChoice(){

    var result = "";
    for (var i = 0; i<choices.length; i++){
        result = "<p> class="choice" data-answer= "${[choices[i]}">${[choices[i]}></p> ;
    }

    return result;
}

//correct and incorrect guesses 
$(document).on("click".choice, function(){
    var userChoice = $(this).attr("data-answer");
    var correctAnswer = quizQuestion[currentQuestion].correct;
    if(correctAnswer === userChoice){
        score++;
        nextQuestion();
    } else {
        loss++;
        nextQuestion();
    }
    
})

function Results(){
    var result =
    <p>Your Score ${score}</p>

    $(document).on("click", "#reset",function(){
        counter = 30;
        currentQuestion = 0;
        score = 0;
        timer = null;

        loadQuestion();
    })

}



