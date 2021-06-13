import React from 'react';
import AuthModel from '../../models/auth';
import './Register.css';

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
        error: ""
    };

    handleSubmit = (e) => {
        e.preventDefault();

        AuthModel.register(this.state).then(json => {
            if (json.error) {
                this.setState({ error: json.error })
            } else {
                console.log(json);
                this.props.history.push('/login');
            }
        });
    }


    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    render() {

        return (

            <div className='body__register'>
                {this.state.error && <p>{this.state.error}</p>}
                <form className='form__register' onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className='input__register'
                            type="text"
                            name="username"
                            onChange={this.handleInput}
                            placeholder="username"
                        />
                    </div>
                    <div>
                        <input
                            className='input__register'
                            type="text"
                            name="email"
                            onChange={this.handleInput}
                            placeholder="email"
                        />
                    </div>
                    <div>
                        <input
                            className='input__register'
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div>
                        <input
                            className='input__register'
                            type="password"
                            placeholder="Password"
                            name="password2"
                            onChange={this.handleInput}
                        />
                    </div>
                    <input className='input__register input__register-submit' type="submit" value="Register" />
                </form>
            </div>


        );
    }
}

export default Register;