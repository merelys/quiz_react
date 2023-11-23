import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import { useState } from 'react';
import Result from './components/Result';

const questions = [
  {
    title: '2+2= ',
    variants: ['4', '5', '6', '7'],
    correct: 0,
  },
  {
    title: '3+2=',
    variants: ['4', '5', '8', '9'],
    correct: 1,
  },
  {
    title: '6+6=',
    variants: ['10', '11', '12', '13'],
    correct: 2,
  },
  {
    title: '10+10=',
    variants: ['12', '15', '17', '20'],
    correct: 3,
  },
  {
    title: '1+1=',
    variants: ['2', '0', '8', '9'],
    correct: 0,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const question = questions[step];
  const numberOfQuestion = questions.length;
  const percentTage = Math.round((step / questions.length) * 100);

  const selectAnswerHandler = (index) => {
    setStep(step + 1);
    if (index == question.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          question={question}
          selectAnswer={selectAnswerHandler}
          percentTage={percentTage}
        ></Game>
      ) : (
        <Result
          step={step}
          correctAnswers={correctAnswers}
          numberOfQuestion={numberOfQuestion}
        />
      )}
    </div>
  );
}

export default App;
