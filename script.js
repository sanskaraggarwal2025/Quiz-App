const quizData = [
  {
    Question: "How old is Cred? ",
    a: "4",
    b: "3",
    c: "2",
    d: "5",
    correct: "b",
  },
  {
    Question: "Which is the most used programming language ? ",
    a: "java",
    b: "cpp",
    c: "c",
    d: "Javascript",
    correct: "d",
  },
  {
    Question: "Who is the President of India ? ",
    a: "Narendra Modi",
    b: "Priyanshu",
    c: "Sameer",
    d: "Sanskar",
    correct: "a",
  },
  {
    Question: "What does CSS stands for ? ",
    a: "Cascading Style Sheet",
    b: "Cascading scroll sheet",
    c: "Cascading soft sheet",
    d: "Cascading Stole Sheet",
    correct: "a",
  },
  {
    Question: "When was Javascript Launched ? ",
    a: "1997",
    b: "1998",
    c: "1995",
    d: "1996",
    correct: "c",
  },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let score = 0;
let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.Question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deSelectAnswers(){
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
  });

}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
   
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
     else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()" style = "background-color: grey" >Reload</button>
            `;
    }
  }
});
