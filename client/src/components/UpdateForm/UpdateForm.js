import React from 'react';



const UpdateForm = (props) => {

    return (

        <div className='body__create' >
            <form className='form__create' onSubmit={props.handleSubmit}>
                <div>
                    <input
                        className='input__create'
                        type='text'
                        name='model'
                        onChange={props.handleInput}
                        placeholder={props.guitar.model}
                    />
                </div>
                <div>
                    <input
                        className='input__create'
                        type='text'
                        name='manufacturer'
                        onChange={props.handleInput}
                        placeholder={props.guitar.manufacturer}
                    />
                </div>
                <div>
                    <input
                        className='input__create'
                        type='text'
                        name='img'
                        onChange={props.handleInput}
                        placeholder={props.guitar.img}
                    />
                </div>
                <input className='input__create input__create-submit' type="submit" value="Update Guitar" />
            </form>
        </div>
    );
}

export default UpdateForm;