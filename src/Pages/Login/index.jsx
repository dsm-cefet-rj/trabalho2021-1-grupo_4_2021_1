import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdEmail, MdLock} from "react-icons/md";
import './login.css';
import { login } from './login.service';
import { useSelector, useDispatch } from "react-redux";
import { fetchAlunos, selectAllAlunos } from '../Aluno/AlunosSlice';
import { fetchProfessores, selectAllProfessores } from '../Professor/ProfessoresSlice';
import { useEffect } from 'react';
import { fetchExames, selectExamesIds } from '../ExamesSlice';

export const Login = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [statusAlunos, loginAluno] = useSelector((state) => [state.alunos.status, selectAllAlunos(state)]);
    const [statusProfessores, loginProfessor] = useSelector((state) => [state.professores.status, selectAllProfessores(state)]);
    const examesIds = useSelector(selectExamesIds);
    const dispatch = useDispatch();

    useEffect(() => {
        if(statusAlunos !== 'loaded')
            dispatch(fetchAlunos());
            dispatch(fetchExames());
        

        if(statusProfessores !== 'loaded')
            dispatch(fetchProfessores());
        
    }, [])


    const checkLoginType = () => {
        let type, loggedIn, redirectUrl;
        
        if(user && user.username){
            type = user.username.split('@')[1].split('.com')[0];
        }

        if (type == "aluno") {
            loggedIn = login(user.username, user.password, loginAluno);
            redirectUrl = `prova/${Math.max(...examesIds)}`;
        }
        else if (type == "professor") {
            loggedIn = login(user.username, user.password, loginProfessor);
            redirectUrl = '/prova/criar';
        }
        /*
        else if (type == "escola") {
            loggedIn = login(user.username, user.password, loginEscola);
            redirectUrl = '/cadastro'; // trocar o cadastro de "não tenho conta" para escola@escola.com
        }*/
        else {
            alert('Usuário não encontrado');
        }

        if(loggedIn) {
            localStorage.setItem('user', user.username);
            localStorage.setItem('userId', loggedIn.id);
            history.push(redirectUrl);
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

                    <h6><a href="/cadastro">Não tenho conta</a></h6>
                </div>
            </div>
        </>
    )
}

export default Login;