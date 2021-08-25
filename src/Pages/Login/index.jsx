import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdEmail, MdLock} from "react-icons/md";
import './login.css';
import { login } from './typelogin';

export const Login = (props) => {
    const [userLocal, setUserLocal] = useState('');
    const [passwordLocal, setPasswordLocal] = useState('');

    const checkLogin = async () => {
        login(userLocal, passwordLocal).then(res => {
            if(res) {
                props.setUser(res.username);
                location.pathname = res.type;
            }
        });
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
                        <input type="text" value={userLocal} onChange={e => setUserLocal(e.target.value)} placeholder="Digite um email" id="email" />
                    </div>

                    <div className="loginSenha">
                        <MdLock />
                        <input type="password" value={passwordLocal} onChange={e => setPasswordLocal(e.target.value)} placeholder="Digite sua senha" />
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