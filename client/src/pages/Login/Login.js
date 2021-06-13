import React from 'react';
import { Link } from 'react-router-dom';
import AuthModel from '../../models/auth';
import UserModel from '../../models/user';
import { useSetRecoilState } from 'recoil';

import './Login.css';


class Login extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
    };


    handleSubmit = (e) => {
        e.preventDefault();

        AuthModel.login(this.state).then(json => {
            if (json.error) {
                this.setState({ error: json.error })
            } else {
                localStorage.setItem('uid', json.signedJwt);
                UserModel.show().then(json => {
                    console.log(json);
                    useSetRecoilState(json.data);
                    this.props.history.push('/guitars');
                })
            }
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {

        return (

            <div className='body__login' >
                {this.state.error && <p>{this.state.error}</p>}
                <form className="form__login" onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className="input__login"
                            type="text"
                            name="email"
                            onChange={this.handleInput}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className="input__login"
                            type="password"
                            name="password"
                            onChange={this.handleInput}
                            placeholder="Password"
                        />
                    </div>
                    <input className="input__login input__login-submit" type="submit" value="Login" />
                    <p><Link to='/register'>Sign Up</Link> for a new account!</p>
                </form>
            </div>

        );
    }
}
export default Login;

