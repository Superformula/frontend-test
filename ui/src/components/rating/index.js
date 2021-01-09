import React from "react";
import "./rating.scss";
import clsx from "clsx";
import full from "./full-star.svg";
import half from "./half-star.svg";
import empty from "./empty-star.svg";

/* Rating component, uses 3 images (star filled 100%, 50% and 0) */
export default ({ value }) => {
    const items = new Array(5).fill(0);
    return <article className="rating">
        {items.map((_,ix)=>{
            if(value > ix) {
                return Math.abs(value - ix) < 1 ?  <img  key={ix} className="star-item-img" src={half} /> : <img  key={ix} className="star-item-img" src={full} />
            }
            return <img key={ix} className="star-item-img" src={empty} />
        })}
    </article>
};
