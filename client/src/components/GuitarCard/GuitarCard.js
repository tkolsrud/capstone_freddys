import React from "react";
import { Link } from "react-router-dom";
import './GuitarCard.css';

function GuitarCard(props) {
    return (
        <div>
            <Link className="card__a-index" to={`/guitars/${props.guitar._id}`}>
                <div className="card__div-index">
                    <img src={props.guitar.img} alt={props.guitar.model} />
                    <div className='div__card-text'>{props.guitar.manufacturer}</div>
                    <div className='div__card-text'>{props.guitar.model}</div>
                </div>
            </Link>
        </div>
    );
}

export default GuitarCard;
