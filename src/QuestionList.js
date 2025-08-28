import React, { useState, useEffect } from 'react';
import Question from './Question';
import questions from './questions';
import ScanYourCard from './scanYourCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderComp from "./HeaderComp";

// Child component to display each item

// Parent component with an array of objects
function ItemList() {
    const searchParams = new URLSearchParams(document.location.search);
    // const currentParam = searchParams.get('type');

    const selectQuestion = () => {
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            const selectedItem = items[randomIndex];
            setSelectedItem(selectedItem);
            setItems(items.filter(item => item.id !== selectedItem.id));
        }
    };

    useEffect(() => {
        selectQuestion();
    }, []);

    const [selectedItem, setSelectedItem] = useState(null);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setansweredQuestions] = useState(1);
    const [items, setItems] = useState(questions[searchParams.get('type')]);

    const handleQuestionUpdate = (updatedInfo) => {

        if (updatedInfo === true) {
            setScore(score + 1)
        };
        setansweredQuestions(answeredQuestions + 1);
        selectQuestion()
    };

    return (
        <div className='question-list full-screen'>
            <HeaderComp />
            {/* <button className='backButton'> <Link to="/">Home</Link></button> */}

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
                        <span className='color-black score-text'>Score {score}/5 </span>
                    </div>
                )
            ) : (<ScanYourCard direction='right' result={score} />)}
            <div></div>
        </div>
    );
}

export default ItemList;