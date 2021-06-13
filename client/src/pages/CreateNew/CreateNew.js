import React from 'react';
import GuitarModel from '../../models/guitar';

import './CreateNew.css';


class CreateNew extends React.Component {
    state = {
        model: "",
        manufacturer: "",
        img: "",
        error: "",
    };


    handleSubmit = e => {
        e.preventDefault();

        GuitarModel.create(this.state).then(json => {
            console.log(json);
            if (json.error) {
                this.setState({ error: json.error })
            } else {
                console.log(json);
                this.props.history.push('/guitars')
            }
        });
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (

            <div className='body__create' >
                {this.state.error && <p>{this.state.error}</p>}
                <form className='form__create' onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className='input__create'
                            type='text'
                            name='model'
                            onChange={this.handleInput}
                            placeholder='Model'
                        />
                    </div>
                    <div>
                        <input
                            className='input__create'
                            type='text'
                            name='manufacturer'
                            onChange={this.handleInput}
                            placeholder='Manufacturer'
                        />
                    </div>
                    <div>
                        <input
                            className='input__create'
                            type='text'
                            name='img'
                            onChange={this.handleInput}
                            placeholder='Image Url'
                        />
                    </div>
                    <input className='input__create input__create-submit' type="submit" value="Add Guitar" />
                </form>
            </div>
        );
    }
};

export default CreateNew;