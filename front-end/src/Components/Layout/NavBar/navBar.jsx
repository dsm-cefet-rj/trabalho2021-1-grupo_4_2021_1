import React, { useState } from "react"
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import '../../../assets/images/logo.png'


export function NavBar(props) {
    const [user, setUser] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        const usuario = localStorage.getItem('usuario');
        setUser(usuario);
        setType(localStorage.getItem('tipo'));
    }, [props.usuario]);

    const isAluno = () => type == 'alunos';
    const isProf = () => type == 'professores';
    const isEscola = () => type == 'escolas';
    const loggedIn = () => !!user;
    
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                
                <NavLink to="/" className="gepeto"><img className="img-fluid" 
                src="../../../assets/images/logo.png" style={{width:"100px"}}/></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-space-between">
                        <Nav className="navbar">
                            <Nav.Link>
                                <NavLink exact to="/" style={{textDecoration:'none'}}>Login</NavLink>
                            </Nav.Link>
                            <Nav.Link hidden={!loggedIn() || isAluno()}>
                                <NavLink to="/prova/criar" style={{textDecoration:'none'}}>Criar Prova</NavLink>
                            </Nav.Link>
                            <Nav.Link hidden={!loggedIn()}>
                                <NavLink to="/provas" style={{textDecoration:'none'}}>Provas</NavLink>
                            </Nav.Link>
                            <Nav.Link hidden={!loggedIn() || isAluno() || isProf()}>
                                <NavLink to="/cadastro" style={{textDecoration:'none'}}>Cadastro</NavLink>
                            </Nav.Link>
                            <Nav.Link hidden={!loggedIn()}>
                                <NavLink to="/resultado" style={{textDecoration:'none'}}>Resultado</NavLink>
                            </Nav.Link>
                            <Nav.Link hidden={!loggedIn() || isAluno() || isProf()}>
                                <NavLink to="/turma" style={{textDecoration:'none'}}>Turma</NavLink>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Text className="navLogin-pai">
                            {
                                user
                                ? <span className="navLogin">Logado como: {user} <NavLink exact to="/" onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('usuario');
                                    localStorage.removeItem('tipo');
                                    alert('Você foi deslogado com sucesso!')
                                    setUser('');
                                }}>Sair</NavLink></span>
                                : <NavLink to="/"className="navLogin">Fazer Login</NavLink>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}