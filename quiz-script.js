var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var startContainer = document.getElementById('welcomeContainer');
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('resultBox');

var showScore = document.getElementById('score');
var correctResults = document.getElementById('correctAnswers');
var incorrectResults = document.getElementById('incorrectAnswers');
var quizTime = document.getElementById('quizTime');
var resultMessage = document.getElementById('resultMessage');
var correctAnswers = [];
var incorrectAnswers = [];

var timeMillisec = 90000;
var counter = '0';
var timeleft = '90';
var min = 0;
var sec = 0;

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    var correct = false;
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 2;
        correct = true;
    }else{
		score-=1;
		correct = false
	}
	console.log(correct);
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
	if(correct==true){
		correctAnswers.push(currentQuestion)
	}else{
		incorrectAnswers.push(currentQuestion)
	}

	if(currentQuestion == totQuestions){
        resultsFunction();
    }

    loadQuestion(currentQuestion);
}

                                        
function startQuiz(){
	setTimeout(resultsFunction,90000)
	clock();
    startContainer.style.display = 'none';
    container.style.display = '';
	loadQuestion(currentQuestion);
}

function resultsFunction() {
    container.style.display = 'none';
	resultCont.style.display = '';
	showScore.textContent = 'Your score is ' + score;;
	console.log(min);
	console.log(sec);
	if(min == 0 && sec == 01){
		quizTime.textContent = 'Your time is up!';
	}else{
		var xmin = 1 - min;
		var xsec = 30 - sec;
		if(xmin==0){
			quizTime.textContent = 'You completed the quiz in '+ xsec + ' seconds';
		}else{
			quizTime.textContent = 'You completed the quiz in '+ xmin+ ' minutes and '+ xsec + ' seconds';
		}
	}

	correctResults.textContent = 'Correct answers are : '+correctAnswers;
	incorrectResults.textContent = 'Incorrect answers are : '+incorrectAnswers;
	if(score<=5){
		resultCont.style.backgroundColor = '#F16A70';
		resultMessage.textContent = 'Oops! You got only ' + correctAnswers.length + ' answers correct \n Press try again, you can do better!' 
		correctResults.textContent = 'Correct answers are : '+correctAnswers;
		incorrectResults.textContent = 'Incorrect answers are : '+incorrectAnswers;
	}else if(score<=10){
		resultCont.style.backgroundColor = '#4D4D4D';
		resultMessage.textContent = 'Bravo! ' + 'Just ' + incorrectAnswers.length + ' answers wrong. \n Press try again to re-attempt';
		correctResults.textContent = 'Correct answers are : '+correctAnswers;
		incorrectResults.textContent = 'Incorrect answers are : '+incorrectAnswers;
	}else if(score<=15){
		resultCont.style.backgroundColor = '#8CDCDA';
		resultMessage.textContent = 'Well done! You got close! \n Press try again to re-attempt the quiz';
		correctResults.textContent = 'Correct answers are : '+correctAnswers;
		incorrectResults.textContent = 'Incorrect answers are : '+incorrectAnswers;
	}else if(score==17){
		resultMessage.textContent = 'You got only the ' + incorrectAnswers + ' th question wrong';
	}else{
		resultCont.style.backgroundColor = '#82E0AA';
		resultMessage.textContent = 'Congratulations! \n You got all correct!';
	}

    return;
}

function clock() {
	counter = '0';
    function convertSeconds(s) {
        min = Math.trunc(s/60);
        sec = numberFormat(s % 60);
        return min + ':' + sec;       
    }
    var timer = document.getElementById('timer-box');
    timer.textContent = convertSeconds(timeleft - counter);

    function timeIt() {
        counter++;
        timer.textContent = convertSeconds(timeleft - counter); 
    }
    setInterval(timeIt, 1000);

    function numberFormat(myNumber) {
        var formattedNumber = ("0" + myNumber).slice(-2);
        return formattedNumber;
    }
}
