import React from 'react';
import './Filter.css';


const FilterChoices = (props) => {


    return (

        <div className="div__select-filter">

            <form className="form__select-gutiar form__select-guitar-manufacturer">
                <select className="select-guitar selectpicker" name="manufacturer" id="manufacturer" onChange={props.handleSelection}>
                    <option className="option" value="">Manufacturer</option>
                    <option className="option" value="Fender">Fender</option>
                    <option className="option" value="Gibson">Gibson</option>
                    <option className="option" value="BC Rich">BC Rich</option>
                    <option className="option" value="">Clear Selection</option>
                </select>
            </form>


            <form className="form__select-guitar  form__select-guitar-model ">
                <select className="select-guitar" name="model" id="name" onChange={props.handleSelection}>
                    <option className="option" value="">Model</option>
                    <option className="option" value="Les Paul">Les Paul</option>
                    <option className="option" value="Stratocaster">Stratocaster</option>
                    <option className="option" value="Speed Flying V">Speed Flying V</option>
                    <option className="option" value="">Clear Selection</option>
                </select>
            </form>

        </div>
    )
}

export default FilterChoices;