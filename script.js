var questions = [
    {
      q: "What would following code return? console.log(typeof typeof 1);",
      a: ["string", "number", "syntax error", "undefined"],
      correct: "string",
    },
    {
      q: "What would be the result of 3+2+'7'?",
      a: ["327", "12", "14", "57"],
      correct: "14",
    },
    {
      q: "How to empty an array in JavaScript?",
      a: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
      correct: "arrayList(0)",
    },
    {
      q:
        "How do you write 'Hello World' in an alert box?",
      a: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
      correct: "alertBox('Hello World')",
    },
    {
      q:
        "What is the HTML tag under which one can write the JavaScript code?",
      a: ["<javascript>", "<scripted>", "<script>", "<js>"],
      correct: "<script>",
    },
  ];
  //Declare
  var question; 
  var choice1; 
  var choice2; 
  var choice3; 
  var choice4; 
  var userAnswer; //get a user's choice
  var correctAnswer; //the corect answer
  var questionCount; //question number 
  
  //DOM / Buttons
  var titleCallEl = document.querySelector("#titleCall");
  var readEl = document.querySelector("#read");
  var choice1El = document.querySelector("#choice0");
  var choice2El = document.querySelector("#choice1");
  var choice3El = document.querySelector("#choice2");
  var choice4El = document.querySelector("#choice3");
  var img = document.querySelector("img");
  var form = document.querySelector("#form");
  var nameInput = document.querySelector("#nameInput");
  var finalScore = document.querySelector("#finalScore");
  var oneMore = document.querySelector("#oneMore");
  var congrats = document.querySelector("#congrats");
  var answerButtons = document.querySelector("#answerButtons");
  var highestScore = document.querySelector("#highestScore");
  var count = localStorage.getItem("count");
  
  var timeRemain = document.querySelector("#timeRemain");
  var timeLeft = 100; // Create the countdown timer.
  var i = 0; //question counter
  var timerInterval;
  
  //Initiarize.
  choice1El.style.display = "none";
  choice2El.style.display = "none";
  choice3El.style.display = "none";
  choice4El.style.display = "none";
  form.style.display = "none";
  congrats.style.display = "none";
  
  //start button clicked!
  //user input====================================
  var startButton = document.querySelector("#start");
  startButton.addEventListener("click", function (event) {
    event.preventDefault();
    quizStart();
  });
  
  //function storage===================================================
  // THEN a timer starts and I am presented with a question
  function quizStart() {
    i = 0;
    timeLeft = 60;
  
    quiz();
  
    timerInterval = setInterval(function () {
      timeLeft--;
      timeRemain.textContent = "Time: " + timeLeft;
  
      if (timeLeft <= 0) {
        console.log("This is timeout");
        clearInterval(timerInterval);
        timeleft = "Timeout";
        afterFinish();
      }
    }, 1000);
  }
  
  //inside of the Quiz!
  function quiz() {
    console.log("This is quiz");
  
    startButton.style.display = "none";
    choice1El.style.display = "initial";
    choice2El.style.display = "initial";
    choice3El.style.display = "initial";
    choice4El.style.display = "initial";
    img.style.display = "none";
    setQuestion();
  
    console.log("else in quiz");
    answerButtons.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.matches("button")) {
        var id = event.target.id.replace("choice", ""); //#choice1
        userAnswer = questions[i].a[parseInt(id)];
        console.log({ userAnswer, correctAnswer });
        if (userAnswer === correctAnswer) {
          i++;
          choice1El.style.display = "none";
          choice2El.style.display = "none";
          choice3El.style.display = "none";
          choice4El.style.display = "none";
        } else {
          i++;
          choice1El.style.display = "none";
          choice2El.style.display = "none";
          choice3El.style.display = "none";
          choice4El.style.display = "none";
          timeLeft = timeLeft - 10;
        }
      }
      if (questions[i] === undefined) {
        afterFinish();
      } else {
        setTimeout(setQuestion, 1000);
      }
    });
  }
  
  //function for quiz
  
  function setQuestion() {
    choice1El.style.display = "initial";
    choice2El.style.display = "initial";
    choice3El.style.display = "initial";
    choice4El.style.display = "initial";
    img.style.display = "none";
    console.log("This is setQuestion");
    //Set questions and answer choices
    question = questions[i].q; //#read
    choice1 = questions[i].a[0];
    choice2 = questions[i].a[1];
    choice3 = questions[i].a[2];
    choice4 = questions[i].a[3];
    correctAnswer = questions[i].correct;
  
    //inner HTML
    var num = i + 1;
    titleCallEl.innerHTML = "Question #" + num;
    readEl.innerHTML = question;
    choice1El.innerHTML = choice1;
    choice2El.innerHTML = choice2;
    choice3El.innerHTML = choice3;
    choice4El.innerHTML = choice4;
  }
  
  // function checkAnswer() {
  //   console.log("This is checkAnswer");
  
  //   quiz();ß
  // }
  
  //Quiz Finished! =================================
  
  var scoreArray = [];
  var formText = nameInput.value;
  function afterFinish() {
    clearInterval(timerInterval);
    console.log("afterFinish");
    choice1El.style.display = "none";
    choice2El.style.display = "none";
    choice3El.style.display = "none";
    choice4El.style.display = "none";
    scoreArray.push(timeLeft);
  
    titleCallEl.innerHTML = "Your score is " + timeLeft;
    readEl.innerHTML = "";
    form.style.display = "initial";
  
    // When form is submitted...
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var formText = document.querySelector(".form-control").value;
      // Return from function early if submitted todoText is blank
      if (formText === "") {
        return;
      }
      //Disply user's name, score & highest score(i could get from local storage?)
      else {
        congrats.style.display = "initial";
        form.style.display = "none";
        img.style.display = "none";
  
        localStorage.setItem("count", timeLeft);
        // highestScore = Math.max.apply(null, scoreArray); // Get max number from array
        userName.innerHTML = formText;
        finalScore.innerHTML =
          "You got " + timeLeft + ", your last score is " + count;
        oneMore.addEventListener("click", function () {
          // quizStart();
          document.location.reload();
        });
      }
    });
  }
  
  //Score Board====================================
  
  var mode = "text";
  highestScore.addEventListener("click", function (event) {
    event.preventDefault();
    showScore();
  });
  // var highestScore;
  function showScore() {
    // highestScore = Math.max.apply(null, scoreArray); // Get max number from array
  
    if (mode === "text") {
      highestScore.textContent = "Your last score is: " + count;
      mode = "score";
    } else {
      highestScore.textContent = "View last Score";
      mode = "text";
    }
  }
  