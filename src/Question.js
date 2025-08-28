function Question({ question, description, onUpdate, answers, correctAnswer }) {

    const handleUpdate = (answer) => {
        onUpdate(checkForCorrectAnswer(answer));
    };

    const checkForCorrectAnswer = (answer) => {
        if (answer === correctAnswer) {
            return true;
        }
        return false;
    };

    return (
        <div>
            <div className="question">
                <h3 className="margin-left-right">{question}</h3>
                <p className="margin-left-right">{description}</p>
                {answers.map((currentAnswer) => (

                    <button
                        className="no-bg-button"
                        onClick={() => handleUpdate(currentAnswer.text)}
                    >
                        <img src={`../assets/${currentAnswer.image}.png`} alt={currentAnswer.text} className="answer-image" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;