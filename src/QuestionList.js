import React, { useState, useEffect } from "react";
import Question from "./Question";
import questions from "./questions";
import ScanYourCard from "./scanYourCard";
import HeaderComp from "./HeaderComp";

function ItemList() {
    
    const [selectedItem, setSelectedItem] = useState(null);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setansweredQuestions] = useState(1);
    const [questionList, setQuestionList] = useState(questions['security']);

    useEffect(() => {
        getRandomQuestion();
    }, []);

    const getRandomQuestion = () => {
        // TODO: get a random question from a pool for this question index

      if (questionList.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionList.length);
        const selectedItem = questionList[randomIndex];
        setSelectedItem(selectedItem);
        setQuestionList(questionList.filter((item) => item.id !== selectedItem.id));
      }
    };

    const handleQuestionUpdate = (updatedInfo) => {
    if (updatedInfo === true) {
      setScore(score + 1);
    }
    setansweredQuestions(answeredQuestions + 1);
    getRandomQuestion();
  };

  return (
    <div className="question-list full-screen">
      <HeaderComp />

      {answeredQuestions <= 5 ? (
        selectedItem && (
          <div>
            <Question
              question={`Question ${answeredQuestions}`}
              description={selectedItem.description}
              answers={selectedItem.answers}
              correctAnswer={selectedItem.correctAnswer}
              onUpdate={handleQuestionUpdate}
            />
            <span className="color-black score-text">Score {score}/5 </span>
          </div>
        )
      ) : (
        <ScanYourCard direction="left" result={score} />
      )}
      <div></div>
    </div>
  );
}

export default ItemList;
