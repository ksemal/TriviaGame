$(document).ready(function() {

    var myQuestions = [
        {
            question: "How do crickets hear?",
            a: "Through their wings",
            b: "Through their belly",
            c: "Through their knees",
            d: "Through their tongue",
            correctAnswer: "c"
        },
        {
            question: "Which American city invented plastic vomit?",
            a: "Chicago",
            b: "Detroit",
            c: "Columbus",
            d: "Baltimore",
            correctAnswer: "a"
        },
        {
            question: "What was Karl Marx’s favorite color?",
            a: "Brown",
            b: "Blue",
            c: "Red",
            d: "Purple",
            correctAnswer: "c"
        },
        {
            question: "What’s the best way to stop crying while peeling onions?",
            a: "Lick almonds",
            b: "Suck lemons",
            c: "Eat cheese",
            d: "Chew gum",
            correctAnswer: "d"
        },
        {
            question: "Which animal sleeps for only five minutes a day?",
            a: "A chameleon",
            b: "A koala",
            c: "A giraffe",
            d: "A beaver",
            correctAnswer: "c"
        },
        {
            question: "One human hair can support how many kilograms?",
            a: "Three",
            b: "Five",
            c: "Seven",
            d: "Nine",
            correctAnswer: "a"
        },
        {
            question: "Which European city is home to the Fairy Investigation Society?",
            a: "Poznan",
            b: "Dublin",
            c: "Bratislava",
            d: "Tallinn",
            correctAnswer: "b"
        },
        {
            question: "What’s a frog’s favorite color?",
            a: "Blue",
            b: "Orange",
            c: "Yellow",
            d: "Brown",
            correctAnswer: "a"
        },
        {
            question: "Which one of these planets rotates clockwise?",
            a: "Uranus",
            b: "Mercury",
            c: "Pluto",
            d: "Venus",
            correctAnswer: "d"
        },
        {
            question: "Which country leads the world in cork production?",
            a: "Greece",
            b: "Australia",
            c: "Spain",
            d: "Mexico",
            correctAnswer: "c"
        },
        {
            question: "What color was Coca-Cola originally?",
            a: "Red",
            b: "Purple",
            c: "Beige",
            d: "Green",
            correctAnswer: "d"
        },
        {
            question: "Bubble gum contains what?",
            a: "Plastic",
            b: "Calcium",
            c: "Rubber",
            d: "Pepper",
            correctAnswer: "c"
        },
        {
            question: "The inventor of the paint roller was of which nationality?",
            a: "Hungarian",
            b: "Canadian",
            c: "Norwegian",
            d: "Argentinian",
            correctAnswer: "b"
        }
    ];
   
    var timeLeft=5;
    var n = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var intervals = 0;
    var startShowTime;
    
    function nextQuestion() {
        $("#timer").text("Time ramaining: " + timeLeft + " sec");
        clearInterval(startShowTime);
        $("#result").text("");
        n++;
        
        $("#question").text(myQuestions[n].question);
        $("#answerA").text(myQuestions[n].a);
        $("#answerB").text(myQuestions[n].b);
        $("#answerC").text(myQuestions[n].c);
        $("#answerD").text(myQuestions[n].d);
        startShowTime = setInterval(showTime, 1000);
    }

    function showCorrectAnswer() {
        clearInterval(startShowTime);
        $("#timer").text("Time ramaining: " + timeLeft + " sec");
        $("#result").text("Correct!");
        timeLeft = 5;
        
    }

    function showInCorrectAnswer() {
        clearInterval(startShowTime);
        $("#timer").text("Time ramaining: " + timeLeft + " sec");
        $("#result").html("Nope <br> The correct answer was: " + myQuestions[n][myQuestions[n].correctAnswer]);
        timeLeft = 5;
        
    }

    function showUnAnswered() {
        $("#timer").text("Time ramaining: 0 sec");
        $("#result").html("Out of time! <br> The correct answer was: " + myQuestions[n][myQuestions[n].correctAnswer]);
        timeLeft = 5;
        
    }

    function showTime() {
        $("#timer").text("Time ramaining: " + timeLeft + " sec");
        timeLeft--;
        if (timeLeft < 0) {
            console.log("noansw");
            unanswered++;
            clearInterval(startShowTime);
            showUnAnswered();
            setTimeout(nextQuestion, 3000);
        } 
    }

    $("#start").on("click", function() {
        $("#question").text(myQuestions[n].question);
        $("#answerA").text(myQuestions[n].a);
        $("#answerB").text(myQuestions[n].b);
        $("#answerC").text(myQuestions[n].c);
        $("#answerD").text(myQuestions[n].d);
        $("#timer").text("Time ramaining: ");
        startShowTime = setInterval(showTime, 1000);
    });

        $(".answers").on("click", function() {
            var value = $(this).val();
            console.log(value);
            if (value === myQuestions[n].correctAnswer) {
                correctAnswers++;
                clearInterval(startShowTime);
                showCorrectAnswer();
                setTimeout(nextQuestion, 3000);
               
            } else if (value !== myQuestions[n].correctAnswer) {
                incorrectAnswers++;
                clearInterval(startShowTime);
                showInCorrectAnswer();
                setTimeout(nextQuestion, 3000);
            }

            
        });
        
        
        
        
    

    
    
    

























});