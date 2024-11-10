const quizQuestions = [
    {
      question: "What is the capital of France?",
      a: "London",
      b: "Paris",
      c: "Berlin",
      d: "Rome",
      answer: "b"
    },
    {
      question: "Which planet is known as the Red Planet?",
      a: "Mars",
      b: "Jupiter",
      c: "Venus",
      d: "Saturn",
      answer: "a"
    },
    {
      question: "Who painted the Mona Lisa?",
      a: "Pablo Picasso",
      b: "Leonardo da Vinci",
      c: "Vincent van Gogh",
      d: "Michelangelo",
      answer: "b"
    },
    {
      question: "What is the largest ocean on Earth?",
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Arctic Ocean",
      d: "Pacific Ocean",
      answer: "d"
    },
    {
      question: "Which country is home to the Great Barrier Reef?",
      a: "Australia",
      b: "Mexico",
      c: "Brazil",
      d: "Canada",
      answer: "a"
    }
  ];
  const quiz = document.getElementById('quiz')
  const answeEls=document.querySelectorAll('.answer')
  const question = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submit = document.getElementById('submit')

  let currentQuiz = 0 ;
  let score = 0 
  function loadQuiz() {
     deselect()
    const currentQuizData = quizQuestions[currentQuiz]
    question.innerText = currentQuizData.question

    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
  }
  submit.addEventListener('click', () => {
    const answer = getSelected()
    if (answer ) {
        if(answer === quizQuestions[currentQuiz].answer) {
            score+=1
        }
        currentQuiz++
        if(currentQuiz<quizQuestions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =`
            <h2>You answered ${score}/${quizQuestions.length} correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
  })

  loadQuiz()
  function getSelected() {
    let answer 
    answeEls.forEach(ans => {
        if(ans.checked) {
            answer = ans.id
        }
    })
    return answer
  }
  
  function deselect() {
    answeEls.forEach(ans => {
        ans.checked = false
    })
  }