import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('HighScoreTrivia')) || 0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questionAmount, setQuestionAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState('');
  const questionStartTime = useRef(null);

  const baseScorePerQuestion = 1000;
  const penaltyPerSecond = 10;

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && questionIndex < questions.length) {
      displayQuestion();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, questionIndex]);

  const fetchCategories = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    setCategories(data.trivia_categories);
  };

  const startGame = () => {
    fetchQuestions();
    setShowQuiz(true);
  };

  const fetchQuestions = async () => {
    let url = `https://opentdb.com/api.php?amount=${questionAmount}`;
    if (selectedCategory) url += `&category=${selectedCategory}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    url += `&type=multiple`;

    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setQuestionIndex(0);
    setScore(0);
  };

  const displayQuestion = () => {
    if (questionIndex < questions.length) {
      setCurrentQuestion(questions[questionIndex]);
      setProgress(`Question ${questionIndex + 1}/${questions.length}`);
      questionStartTime.current = Date.now();
    } else {
      updateHighScore();
      setResult(`Quiz Finished! Your final score is ${score}`);
    }
  };

  const selectAnswer = (selectedAnswer) => {
    const correctAnswer = currentQuestion.correct_answer;
    const timeTaken = (Date.now() - questionStartTime.current) / 1000;
    let scoreForThisQuestion = Math.max(baseScorePerQuestion - Math.floor(timeTaken) * penaltyPerSecond, 0);

    if (selectedAnswer === correctAnswer) {
      setScore(score + scoreForThisQuestion);
      setResult(`Correct! + ${scoreForThisQuestion} Points`);
    } else {
      setResult(`Wrong! The correct answer was: ${correctAnswer}`);
    }

    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setResult('');
    }, 3000);
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('HighScoreTrivia', score);
    }
  };

  return (
    <div id="quiz-container">
      {!showQuiz ? (
        <div id="game-setup">
          <div>
            <label htmlFor="category">Choose a Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Any Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="amount">Number of Questions:</label>
            <input
              type="number"
              id="amount"
              min="1"
              max="50"
              value={questionAmount}
              onChange={(e) => setQuestionAmount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="difficulty">Select Difficulty:</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <div id="quiz">
          <div id="progress">{progress}</div>
          <div id="currentScore">Current Score: {score}</div>
          <div id="highScore">High Score: {highScore}</div>
          {currentQuestion && (
            <>
              <div id="question">{currentQuestion.question}</div>
              <div id="answers">
                {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].map(
                  (answer, index) => (
                    <button key={index} onClick={() => selectAnswer(answer)}>
                      {answer}
                    </button>
                  )
                )}
              </div>
              <div id="result">{result}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
