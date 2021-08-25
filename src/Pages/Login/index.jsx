import React from 'react';
import './login.css';
import { MdEmail, MdLock} from "react-icons/md";
import Button from '@material-ui/core/Button';
import { checkLogin } from './typelogin';
import { BrowserRouter as Router } from 'react-router-dom';

export const Login = () => {
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
                        <input type="text" placeholder="Digite um email" id="email" />
                    </div>

                    <div className="loginSenha">
                        <MdLock />
                        <input type="password" placeholder="Digite sua senha" />
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