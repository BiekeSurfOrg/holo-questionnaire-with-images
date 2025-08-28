import React from 'react';
import { useRouteChange } from './navigation';

const Card = ({ text, route, img }) => {
    const routeChange = useRouteChange();
    return (
        <div className="card" onClick={() => routeChange(route)}>
            <img src={"/assets/" + img} class="tile-image" alt={text || "Card Image"} />
            <div class="tile-description-area">
                <span class="tile-description"> {text}</span>
            </div>
        </div>
    );
};

export default Card;