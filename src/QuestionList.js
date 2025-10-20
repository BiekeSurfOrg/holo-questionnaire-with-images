import { useState, useEffect } from "react";
import Question from "./Question";
import updatedQuestions from "./questions";
import ScanYourCard from "./scanYourCard";
// import HeaderComp from "./HeaderComp";

function ItemList() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionBinaryInt, setQuestionBinaryInt] = useState((Math.random()>=0.5)? 1 : 0);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getRandomQuestion();
  }, []); // eslint-disable-line

  const getRandomQuestion = () => {
    if(updatedQuestions.length > currentQuestionIndex){
      const randomIndex = Math.floor(
        Math.random() * updatedQuestions[currentQuestionIndex].length
      );
      setSelectedItem(updatedQuestions[currentQuestionIndex][randomIndex]);
      setQuestionBinaryInt((Math.random()>=0.5)? 1 : 0);
    }
  };

  const handleQuestionUpdate = (updatedInfo) => {
    if (updatedInfo === true) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
    getRandomQuestion();
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    getRandomQuestion();
  };

  return (
    <div className="question-list">
      {/* <HeaderComp /> */}

      {currentQuestionIndex <= 4 ? (
        selectedItem && (
          <div>
            <Question
              question={`Question ${currentQuestionIndex + 1}`}
              description={"Which is the most secure option"}
              answerA={questionBinaryInt ? selectedItem.answerA : selectedItem.answerB}
              answerB={questionBinaryInt ? selectedItem.answerB : selectedItem.answerA}
              correctAnswer={selectedItem.correctAnswer}
              onUpdate={handleQuestionUpdate}
            />
            <span className="color-black score-text">Score {score}/5 </span>
          </div>
        )
      ) : (
        <ScanYourCard direction="left" result={score} restartGame={() => restartGame()} />
      )}
    </div>
  );
}

export default ItemList;
