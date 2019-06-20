//timer start count
var timer = 10;
//array of question objects, with answers 
var questionArr = [{
    question: "What Native American language was Super Bowl XXX the first to be broadcast in?",
    answer: ["a. beer", "b. Navajo", "c. beer", "d. beer"],
},
{
    question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame?",
    answer: ["a. beer", "b. beer", "c. five", "d. beer"]
},
{
    question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977?",
    answer: ["a. Glasses", "b. beer", "c. beer", "d. beer"]
},
{
    question: "What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
    answer: ["a. beer", "b. beer", "c. beer", "d. Joe Montana"]
}];
//correct answers array 
var rightAnswers = ["b. Navajo", "c. five", "a. Glasses", "d. Joe Montana"]

//things to say when user answers correctly 
var approval = ["Nice", "You're a trivia pro", "Good Work", "A++"]
var disapproval = ["You suck", "c'mon son", "gtfoh with that ish", "You're better than that"]
var right = 0;
var wrong = 0;
//function to create elements for answers  
function answers(i) {
    var answers = questionArr[i].answer
    for (var i = 0; i < answers.length; i++) {
        var newElement = document.createElement('p');
        newElement.id = answers[i]; newElement.className = "answer";
        newElement.innerHTML = answers[i];
        $('#answers').append(newElement);
    }
}
var timer = 10
var i = 0
//on click start function
$('#start').on('click', function () {
    question(i)
    clock()
})

var clock = setInterval(function () {
        timer--;
        $('#timer').html(timer)
        if (timer === 0) {
            wrong++;
            console.log(wrong)
            timer = 10;
            $('#timer').html(timer);
            i++
            question(i)
//if game over... cant clear interval or timeout
        } else if (i >= questionArr.length) {
            $('.q-container').empty()
            clearInterval(clock)
            $('#timer').empty()
            $('.q-container').append(`<p id = "over">Correct: ${right}`)
            $('.q-container').append(`<p id = "over">Incorrect: ${wrong}`)
        }
    }, 1000)


//writes question and answer options
function question(i) {
    $('#question').html(questionArr[i].question);
    $('#answers').html('')
    answers(i)
};

//on answer click function 
$('#answers').on('click', function (event) {
    var value = event.target.id;
    console.log(value)
    if (value === rightAnswers[i]) {
        right++;
        console.log(right)
        // clearTimeout(question);
        timer = 10;
        i++;
        question(i)
    } else {
        wrong++;
        console.log(wrong)
        // clearTimeout(question)
        timer = 10;
        i++;
        question(i)
    }
})










