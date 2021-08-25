import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdEmail, MdLock} from "react-icons/md";
import './login.css';
import { login } from './typelogin';

export const Login = (props) => {
    const history = useHistory();

    const checkLogin = async () => {
        login(props.user.username, props.user.password).then(res => {
            if(res) {
                history.push(res.type);
            }
        });
    }

    function handleInputChange(e) {
        props.setUser({...props.user, [e.target.name]: e.target.value});
    }

    return (
        <>
        <Router>
            <div className="login">
                <div className="login-logo">
                    <img src="assets/images/logo.png"></img>
                </div>

                <div className="right">
                    <div id="acess">
                        <h1>Acessar Conta</h1>
                    </div>
                    <div className="loginEmail">
                        <MdEmail />
                        <input type="text" name="username" value={props.user.username} onChange={handleInputChange} placeholder="Digite um email" id="email" />
                    </div>

                    <div className="loginSenha">
                        <MdLock />
                        <input type="password" name="password" value={props.user.password} onChange={handleInputChange} placeholder="Digite sua senha" />
                    </div>

                    <Button variant="contained" color="primary" className="button" onClick={() => checkLogin()}>
                        Login
                    </Button>

                    <h6><a href="">Não tenho conta</a></h6>
                </div>
            </div>
	    </Router>  
        </>
    )
}

export default Login;