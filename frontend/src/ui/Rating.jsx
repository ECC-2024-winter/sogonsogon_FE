import React from "react";
import { useState } from "react";
import { PiStarFill, PiStarLight } from "react-icons/pi";

function Rating() {
    const [ rating, setRating ] = useState(0);

    return (
        <div>
            {[...Array(rating)].map((a, i) =>(
                <PiStarFill className="rating-star" color="#FFBF87" key={i} onClick={() => setRating( i + 1 )} />
            ))}

            {[...Array(5-rating)].map((a, i) =>(
                <PiStarLight className="rating-star" color="#FFBF87" key={i} onClick={() => setRating( rating + i + 1 )} />
            ))}
        </div>
    );

    
};

export default Rating;