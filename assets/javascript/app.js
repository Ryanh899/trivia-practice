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
var input = false; 
//button to start timer
function answers(i) {
    var answers = questionArr[i].answer
    for (var i = 0; i < answers.length; i++) {
        var newElement = document.createElement('div');
        newElement.id = answers[i]; newElement.className = "answer";
        newElement.innerHTML = answers[i];
        $('#answers').append(newElement);
    }
}
var timer = 10
var i = 0
$('#start').on('click', function (){
    setInterval(function clock(){
        timer-- ; 
        $('#timer').html(timer)
        if (timer === 0) {
            wrong++; 
            console.log(wrong)
            timer = 10; 
            $('#timer').html(timer); 
            i++
            question(i)
        } 
    },1000)
    setTimeout(question(i), 10000); 
})

//writes question and answer options
function question(i) {
    $('#question').html(questionArr[i].question);
    $('#answers').html('')
    answers(i)
}; 


$('#answers').on('click', function (event) { 
    var value = event.target.id; 
    console.log(value)
    if (value === rightAnswers[i]) {
        right++; 
        console.log(right)
        clearTimeout(question);
        timer = 10; 
        i++; 
        question(i)
    } else {
        wrong++; 
        console.log(wrong)
        clearTimeout(question)
        timer = 10; 
        i++; 
        question(i)
    }
})




//gets the clicked answer, declares it correct or not
    // $('.answer').on('click', function click (e) { 
    //     var value = this.id
    //     if (value === rightAnswers[i]) {
    //         right++
    //         clearTimeout(callback);
    //         timer = 10; 
    //         i++; 
    //         question(i)
    //     } else {
    //         wrong++
    //         clearTimeout(callback)
    //         timer = 10; 
    //     }
    // })





