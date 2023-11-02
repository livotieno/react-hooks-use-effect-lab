import React, { useState, useEffect } from "react";

// destructure directly
function Question({ question, onAnswered }) {
  // state
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  // runs every time timeRemaining changes
  useEffect(() => {
    let intervalId;

    if (timeRemaining > 0) {
      intervalId = setTimeout(() => {
        setTimeRemaining((timeRemaining) => {
          return timeRemaining - 1;
        });
      }, 1000);
    }

    // cleanup function
    return () => {
      clearTimeout(intervalId);
    };
  }, [timeRemaining]);

  // time lapse
  // runs every time timeRemaining or onAnswered changes
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
