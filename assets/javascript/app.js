$('#start').on('click', function () {
    // subwrapper will remove start button and replace with questions
    // $('#subwrapper').remove();
    game.start();
})

var questions = [{
    question: "Who won the most career NBA championships as player?",
    answers: ["Bill Russel ", "John Stockton ", "Lebron James ", "Steph Curry "],
    correctAnswer: "Bill Russel "
}, {
    question: "who is the tallest everyday point guard of all time?",
    answers: ["Dirk Nowitzki ", "Kevin Durant ", "Magic Johnson ", "Steph Curry "], 
    correctAnswer: "Magic Johnson "
}, {
    question: "What team has the most playoff appearances?",
    answers: ["Celtics ", "Lakers ", "Warriors ", "Clippers "],
    correctAnswer: "Lakers"
}, {
    question: "What player has the highest career 3-pt FG percentage?",
    answers: ["Steph Curry ", "Magic Johnson ", "Steve Ker r", "Lebron James "],
    correctAnswer: "Steve Kerr "
}, {
    question: "Who won the most NBA Finals MVP's?",
    answers: ["Magic Johnson ", "Michael Jordan ", "Lebron James ", "Shaquille Oneal "],
    correctAnswer: "Michael Jordan "
}, {
    question: "1st player to be drafted #1 without playing college or high school basketball in the U.S.?",
    answers: ["Kobe bryant  ", "Lebron James ", "Yao Ming", "Kevin Love"],
    correctAnswer: "Yao Ming "
}];

var game = {
    correct: 0,
    incorrect: 0,
    // seconds
    counter: 30,
    countdown: function () {
        // created counter function that will 'start' below
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            // this method will run when game is done
            game.done();
        }
    },
    start: function () {
        // insert time, 1000seconds
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        // print all correct and incorrect answers
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        // print questions not answered
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}





