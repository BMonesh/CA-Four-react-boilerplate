import React, { useState } from 'react';
import questions from '../questions';
import "./Quiz.css"

const Quiz = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <img src="path-to-your-logo.png" alt="Logo" />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
        {currentQuestionIndex < questions.length ? (
          <div className="question">
            <p>{questions[currentQuestionIndex].text}</p>
            {questions[currentQuestionIndex].options.map((option) => (
              <button key={option.id} onClick={() => handleAnswer(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <p>Quiz Completed!</p>
            <p>Your score is {score} out of {questions.length}.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
