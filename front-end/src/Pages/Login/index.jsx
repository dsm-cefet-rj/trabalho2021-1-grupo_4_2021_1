import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdEmail, MdLock} from "react-icons/md";
import './login.css';
import { login } from './login.service';
import { useSelector, useDispatch } from "react-redux";
import { fetchExames, selectExamesIds } from '../ExamesSlice';


export const Login = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const examesIds = useSelector((state) => selectExamesIds(state));
    const dispatch = useDispatch();

    const checkLoginType = async () => {
        let type, redirectUrl;
        
        if(user && user.username){
            type = user.username.split('@')[1].split('.com')[0];
        }
        
        await login(user.username, user.password).then(res => {
            const loggedIn = res.data.token;
            if (type == "alunos") {
                redirectUrl = '/provas';
            }
            else if (type == "professores") {
                redirectUrl = '/prova/criar';
            }
            else if (type == "escola") {
                redirectUrl = '/cadastro';
            }
            else if  (type == "turmas"){
                redirectUrl = '/cadastro/turmas'

            }
            else{
                alert('Usuário não encontrado');
            }
    
            if(loggedIn) {
                // cookies.set('token', loggedIn);
                localStorage.setItem('token', loggedIn);
                localStorage.setItem('usuario', user.username);
                localStorage.setItem('tipo', user.username.split('@')[1].split('.com')[0]);
                // localStorage.setItem('userId', loggedIn.id);
                history.push(redirectUrl);
                props.changeUserState(user.username);
                // location.reload();
                alert('Você foi logado com sucesso!');
            }
        })

    }

    function handleInputChange(e) {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className="login">
                <div className="login-logo">
                    <img src="assets/images/logo.png"></img>
                </div>

                <div className="right">
                    <div id="acess">
                        <h1>Acessar Conta</h1>
                    </div>
                    <form>
                        <div className="loginEmail">
                            <MdEmail />
                            <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Digite um email" id="email" />
                        </div>

                        <div className="loginSenha">
                            <MdLock />
                            <input type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Digite sua senha" />
                        </div>

                        <Button variant="contained" color="primary" className="button" onClick={() => checkLoginType()}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;