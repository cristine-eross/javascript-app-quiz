const quizData = [
    {
        question: 'What is the most popular programming language in 2023?',
        a: 'Java',
        b: 'Javascript',
        c: 'Python',
        d: 'C#',
        correct:  'b'
    }, 
    {
        question: 'Which one is not a NoSQL database?',
        a: 'MongoDb',
        b: 'Firestore',
        c: 'Oracle',
        d: 'Redis',
        correct:  'c'
    },
    {
        question: 'Which JavaScript method creates a new array by merging existing arrays?',
        a: 'concat()',
        b: 'flat()',
        c: 'splice()',
        d: 'pop()',
        correct:  'a'
    },
    {
        question: 'In which programming paradigm is SOLID used?',
        a: 'functional',
        b: 'dynamic',
        c: 'object oriented',
        d: 'event-driven',
        correct:  'c'
    },
    {
        question: 'Which CSS selector is the most specific among these?',
        a: 'class',
        b: 'id',
        c: 'h6',
        d: 'h1',
        correct:  'b'
    }
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer')
    let answer = undefined

    answerEls.forEach((answerEl) => {
       if(answerEl.checked) {
        answer = answerEl.id
       }
    })

    return answer
}   

function deselectAnswers() {
    const answerEls = document.querySelectorAll('.answer')
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    console.log(answer)

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
           score ++ 
        }

        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2><button onClick="location.reload()">Let's do it again!</button>`
        }
    }  
})

