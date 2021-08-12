import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";

export const Login = () => {
    return (
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
                    <input type="text" placeholder="Digite um email" />
                </div>

                <div className="loginSenha">
                    <MdLock />
                    <input type="text" placeholder="Digite sua senha" />
                </div>

                <NavLink type="submit" class="btn button" to="/prova">
                    Entrar
                </NavLink>

                <h6><a href="">Não tenho conta</a></h6>
            </div>
        </div>
    )
}