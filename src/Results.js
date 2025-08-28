import React from 'react';
import Result from './Result';

const Results = ({ result }) => {

    // const renderRandomSentance = () => {
    //     const randomSentances = [
    //         "Je bent op de goede weg! \n Wil je meer leren? \n Scan dan hier je bezoekersbadge!",
    //         "Geweldig gedaan!\n Je maakte een goede start, \n maar er is ruimte om nog meer te leren! \n Scan hier je bezoekersbadge!",
    //         "Goed bezig!\n Zin om je kennis nog te verbeteren? \n Scan dan hier je bezoekersbadge of vraag meer informatie.",
    //     ];

    //     const randomIndex = Math.floor(Math.random() * randomSentances.length);
    //     return randomSentances[randomIndex];
    // }

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