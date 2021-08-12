import React from 'react';
import './login.css';
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <img src="/imagens/logo.png"></img>
            </div>

            <div className="right">
                <div id="acess">
                    <h1>Acessar Conta</h1>
                </div>
                <div className="loginEmail">
                    <MdEmail />
                    <input type="text" placeholder="Digite um email" />
                </div>

                <div className="loginSenha">
                    <MdLock />
                    <input type="text" placeholder="Digite sua senha" />
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h6><a href="">Não tenho conta</a></h6>
            </div>
        </div>
    )
}

export default Login;