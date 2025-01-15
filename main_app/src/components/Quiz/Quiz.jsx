import { useState, useRef } from 'react';
import './Quiz.css';
import {data} from '../../assets/data';


const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setlock] = useState(false);

    let options1 = useRef(null);
    let options2 = useRef(null);
    let options3 = useRef(null);
    let options4 = useRef(null);

    let option_array = [options1,options2,options3,options4];

    const checkAns = (e, ans) => {

        if (lock === false) {
            setlock(true);
            if (question.ans === ans) {
                e.target.classList.add('correct');
            } else {
                e.target.classList.add('wrong');
                option_array[question.ans-1].current.classList.add('correct');
            }
        }
    }

    const nextQuestion = (e) => {
        setQuestion(data[index + 1])
        setIndex(() => index + 1);
    }

    return (
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={options1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
            <li ref={options2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
            <li ref={options3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
            <li ref={options4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={nextQuestion}>Next</button>
        <div className="index">
            1 of 5 questions
        </div>
      </div>
    )
}


export default Quiz;