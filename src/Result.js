import React from 'react';

const Result = ({ score, sentance }) => {
    const splitSentence = sentance.split('\n');
    return (
        <div className='result'>
            <h2>Score: {score}/5</h2>
            <div>
                {splitSentence.map((sentence, index) => <p key={`${score}-${index}`}>{sentence}</p>)}
            </div>
        </div>
    )

};

export default Result;