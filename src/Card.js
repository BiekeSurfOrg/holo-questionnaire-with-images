import React from 'react';
import { useRouteChange } from './navigation';

const Card = ({ text, route, img }) => {
    const routeChange = useRouteChange();
    return (
        <div className="card" onClick={() => routeChange(route)}>
            <img src={"/assets/" + img} className="tile-image" alt={text || "Card Image"} />
            <div className="tile-description-area">
                <span className="tile-description"> {text}</span>
            </div>
        </div>
    );
};

export default Card;