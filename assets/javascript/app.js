function question(text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;

}



// Quiz control scores and questions

function Quiz(questions) {
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
}

Quiz.prototype.getquestionIndex = function() {
    return this.question[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.question.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
    this.questionIndex++;

    if(this.getquestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

// Questions

function populate() {
    if(quiz.isEnded()) {
      //  showScore();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getquestionIndex().text;

        var choices = quiz.getquestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = choices[i];
        }

    }
}



var question = [
    new Questions("Who won the most career NBA championships as player?", ["Bill Russel", "John Stockton", "Lebron James", "Steph Curry"], "Bill Russel"),
    new Questions("who is the tallest everyday point guard of all time?", ["Dirk Nowitzki", "Kevin Durant", "Magic Johnson", "Steph Curry"], "Magic Johnson"),
    new Questions("What team has the most playoff appearances?", ["Celtics", "Lakers", "Warriors", "Clippers"], "Lakers"),
    new Questions("What player has the highest career 3-pt FG percentage?", ["Steph Curry", "Magic Johnson", "Steve Kerr", "Lebron James"], "Steve Kerr"),
    new Questions("Who won the most NBA Finals MVP's?", ["Magic Johnson", "Michael Jordan", "Lebron James", "Shaquille Oneal"], "Michael Jordan"),
];

var quiz = new quiz(question);

populate();