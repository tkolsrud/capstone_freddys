import React from 'react';
import './GuitarShow.css';
import { Link } from 'react-router-dom';

import { Admin } from '../../recoil/user';
import { useRecoilValue } from 'recoil';


function GuitarShow(props) {
    const isAdmin = useRecoilValue(Admin);
    return (
        <div className='body__show'>
            <div className='div__guitarshow-card'>
                <img src={props.guitar.img} alt={props.guitar.model} />
                <div className='div__guitarshow-info'>
                    <p>{props.guitar.manufacturer} {props.guitar.model}</p>
                    <p>{props.guitar.year}</p>
                    <p>Condition: {props.guitar.condition}</p>
                    {isAdmin && (
                        <>
                            <div><Link className="button__guitarshow" to={`/guitars/${props.guitar._id}/update`}>Edit Guitar Info</Link></div>
                            <div><button className="button__guitarshow" onClick={props.handleDelete}>Delete</button></div>
                        </>
                    )}
                </div>
            </div>
        </div >
    )
}

export default GuitarShow;