import React, { useEffect, useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  // states
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  // returns question of specified id
  const currentQuestion = questions.find((question) => {
    return question.id === currentQuestionId;
  });

  function handleQuestionAnswered(correct) {
    // id less than length of array
    if (currentQuestionId < questions.length) {
      //update currentQuestionId based on its previous state
      setCurrentQuestion((currentQuestionId) => {
        return currentQuestionId + 1;
      });
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      // update score based on its previous state
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {/* conditional rendering */}
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            {/* questions are over */}
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;