import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdEmail, MdLock} from "react-icons/md";
import './login.css';
import { login } from './login.service';
import { useSelector, useDispatch } from "react-redux";
import { selectAllAlunos } from '../Aluno/AlunosSlice';
import { selectAllProfessores } from '../Professor/ProfessoresSlice';

export const Login = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const loginAluno = useSelector(selectAllAlunos);
    const loginProfessor = useSelector(selectAllProfessores);
    const dispatch = useDispatch();

    const checkLoginType = () => {
        let type, loggedIn;
        if(user && user.username){
            type = user.username.split('@')[1].split('.com')[0];
        }

        if (type == "aluno") {
            loggedIn = login(user.username, user.password, loginAluno);
        }
        else if (type == "professor") {
            loggedIn = login(user.username, user.password, loginProfessor);
        }
        else {
            alert('Usuário não encontrado');
        }
        
        if(loggedIn) {
            localStorage.setItem('user', user.username);
            history.push(type);
        }
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

                    <h6><a href="/cadastro">Não tenho conta</a></h6>
                </div>
            </div>
        </>
    )
}

export default Login;