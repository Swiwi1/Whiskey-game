import React, { useRef } from 'react'
import { useState } from 'react'
import './Quiz.css'

const questions = [
    {
        id: 1,
        question: "What Country is A from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 1
    },
    {
        id: 2,
        question: "What Country is B from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 2
    },
    {
        id: 3,
        question: "What Country is C from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 2
    },
    {
        id: 4,
        question: "What Country is D from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 2
    },
    {
        id: 5,
        question: "What Country is E from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 2
    },
    {
        id: 6,
        question: "What Country is F from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 3
    },
    {
        id: 7,
        question: "What Country is G from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 4
    },
    {
        id: 8,
        question: "What Country is H from?",
        option1: "Ireland",
        option2: "Scotland",
        option3: "America",
        option4: "Japan",
        answer: 3
    }
]


const Quiz = () => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(questions[index])
    let [lock, setLock] =useState(false)
    let [result, setResult] =useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_aray = [Option1,Option2,Option3,Option4]

    const checkAnswer = (e, answer) => {
        if(lock === false) {
            if (question.answer === answer) {
            e.target.classList.add("correct")
            setLock(true)
        }
        else {
            e.target.classList.add("wrong")
            setLock(true)
            option_aray[question.answer-1].current.classList.add("correct")
        }
        }
        
    }


    const nextQuestion = () => {
        if (index === questions.length-1) {
            setResult(true)
            return 0
        }
        if (lock === true) {
            setIndex(++index)
            setQuestion(questions[index])
            setLock(false)
            option_aray.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null

            })
        }
        
    }
  return (
    <div className='container'>

        <h1>We love Whiskey</h1>
        <h2 className='question'>{index+1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>
        </ul>
        <h2 className='result'></h2>
        <button className='button' onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default Quiz