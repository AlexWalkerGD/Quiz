const quiz = [
  {
    question: "Which language is used to structure web pages?",
    options: ["A. HTML", "B. CSS", "C. JavaScript"],
    correct: 0
  },
  {
    question: "Which language is used to style web pages?",
    options: ["A. HTML", "B. CSS", "C. JavaScript"],
    correct: 1
  },
  {
    question: "Which of these is NOT a primitive type in JavaScript?",
    options: ["A. string", "B. number", "C. list"],
    correct: 2
  },
  {
    question: "Which language is used to add interactivity to web pages?",
    options: ["A. HTML", "B. CSS", "C. JavaScript"],
    correct: 2
  },
  {
    question: "In CSS, which property changes the text color?",
    options: ["A. color", "B. background-color", "C. font-color"],
    correct: 0
  },
  {
    question: "Which symbol is used to indicate an ID in CSS?",
    options: ["A. . (dot)", "B. # (hash)", "C. $ (dollar)"],
    correct: 1
  },
  {
    question: "Which JavaScript method converts text to uppercase?",
    options: ["A. .toUpperCase()", "B. .toLowerCase()", "C. .capitalize()"],
    correct: 0
  },
  {
    question: "In programming, a loop that never ends is called a?",
    options: ["A. Finite loop", "B. Infinite loop", "C. Closed loop"],
    correct: 1
  },
  {
    question: "Which extension is normally used for JavaScript files?",
    options: ["A. .js", "B. .java", "C. .jsx"],
    correct: 0
  }
];

let currentQuestion = 0;
var isSelected = false;

function submit(){

    if(isSelected){
        let items = document.querySelectorAll("#answer");
        items.forEach((item, index) => {
            if(index === quiz[currentQuestion].correct) {      
                item.className = "correct"

                setTimeout(() => { 
                    items.forEach(li => {
                        li.classList.remove("selected", "correct");
                    });

                    currentQuestion++;
                    if(currentQuestion < quiz.length){
                        refreshQuest();
                    } else {
                        alert("Quiz finalizado!");
                    }
                }, 3000);
                
                setTimeout(refreshQuest, 3000);
            }
        });
    }
}

function refreshQuest (){
    let question = document.getElementById("question");
    question.textContent = quiz[currentQuestion].question;

    let answer = document.querySelectorAll("#answer");
    items.forEach((li, index) => {
    li.textContent = quiz[currentQuestion].options[index];
    });
    isSelected = false;
}

let items = document.querySelectorAll("#answer");

items.forEach(item => {

    item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("selected"));
        item.className = "selected";
        isSelected = true;
    });
});