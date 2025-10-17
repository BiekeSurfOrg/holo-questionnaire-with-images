function Question({
  question,
  description,
  onUpdate,
  answerA,
  answerB,
  correctAnswer,
}) {
  const handleUpdate = (answer) => {
    return onUpdate(answer === correctAnswer);
  };

  return (
    <div>
      <div className="question">
        <h3 className="margin-left-right">{question}</h3>
        <p className="margin-left-right">{description}</p>

        <button
          className="no-bg-button"
          onClick={() => handleUpdate(answerA.text)}
        >
          <img
            src={`../assets/${answerA.image}.png`}
            alt={"Security example one"}
            className="answer-image"
          />
        </button>
        <button
          className="no-bg-button"
          onClick={() => handleUpdate(answerB.text)}
        >
          <img
            src={`../assets/${answerB.image}.png`}
            alt={"Security example two"}
            className="answer-image"
          />
        </button>
      </div>
    </div>
  );
}

export default Question;
