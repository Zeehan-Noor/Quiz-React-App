
import React, { useEffect, useState } from 'react';
import { Quizdetail } from "./Services/QuizService";
import { Quiz } from "./Types/quiz_types";
import { QuizCard } from "./Components/QuizCard";
import Result from './Components/Result';
function App() {

  let [quiz, setquiz] = useState<Quiz[]>([]);
  let [currentStep, setcurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showresult, setShowResult] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const dataQuiz: Quiz[] = await Quizdetail(5, 'easy');
      setquiz(dataQuiz);
      console.log(dataQuiz); 
    }
    fetchData();
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: Quiz = quiz[currentStep];

    console.log("Correct Answer " + currentQuestion.correct_answer + "--User Answer " + userAns);

    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (currentStep !== quiz.length - 1)
      setcurrentStep(++currentStep);

    else {

      setShowResult(true);
    }
  }

  if (showresult) {
    return (
      <div>

 <Result Score={score}/>
</div>
    )
  }

  if (!quiz.length)
    return <h3>Loading...</h3>

  return (
    <div className="App">
      <QuizCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
        variable={score}
      />
    </div>
  );
}

export default App;
