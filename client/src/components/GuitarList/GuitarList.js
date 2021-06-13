import React from "react";

import GuitarCard from "../GuitarCard/GuitarCard";
import './GuitarList.css';


function GuitarList(props) {

    const generateGuitars = guitars => {
        for (const guitar of guitars) {
            if (guitar.manufacturer === props.selection) {
                return <GuitarCard key={guitar._id} guitar={guitar} />
            }

            if (guitar.model === props.selection) {
                return <GuitarCard key={guitar._id} guitar={guitar} />
            }
            if (guitar.condition === props.selection) {
                return <GuitarCard key={guitar._id} guitar={guitar} />
            }
            if (guitar.genre === props.selection) {
                return <GuitarCard key={guitar._id} guitar={guitar} />
            }

            if (!props.selection.length) {
                return guitars.map(guitar => {
                    return <GuitarCard key={guitar._id} guitar={guitar} />;
                })
            }
        }

    };

    //     const generateGuitars = guitars => {
    // return guitars.map(guitar => {
    //             return <GuitarCard key={guitar._id} guitar={guitar} />;
    //         });    


    return (
        <div className="body__list">
            {generateGuitars(props.guitars)}
        </div>
    );
}

export default GuitarList;
