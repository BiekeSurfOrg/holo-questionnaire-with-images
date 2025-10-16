import React from 'react';
import Result from './Result';

const Results = ({ result }) => {

    switch (result) {
        case 0:
            return <Result score={result} sentance={"you can do better"} />;
        case 1:
            return <Result score={result} sentance={"that's a pity"} />;
        case 2:
            return <Result score={result} sentance={"not bad"} />;
        case 3: 
            return <Result score={result} sentance={"well done"} />;
        case 4:
            return <Result score={result} sentance={"Well done!"} />;
        case 5:
            return <Result score={result} sentance={"WINNER"} />;
        default:
            return <h1>no results found</h1>;
    }
};

export default Results;