import React, { useState } from "react"
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


export function NavBar(props) {
    const [user, setUser] = useState();

    useEffect(() => setUser(localStorage.getItem('user')), [user])

    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand>GEPETO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-space-between">
                        <Nav className="navbar">
                            <Nav.Link><NavLink exact to="/" style={{textDecoration:'none'}}>Login</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/prova/criar" style={{textDecoration:'none'}}>Criar Prova</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/prova/1" style={{textDecoration:'none'}}>Prova</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/cadastro" style={{textDecoration:'none'}}>Cadastro Aluno</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/resultado" style={{textDecoration:'none'}}>Resultado</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/turma" style={{textDecoration:'none'}}>Turma</NavLink></Nav.Link>
                        </Nav>
                        <Navbar.Text >
                            {
                                user
                                ? <span>Logado como: {user} <NavLink exact to="/" onClick={() => {
                                    localStorage.removeItem('user');
                                    setUser('');
                                }}>Sair</NavLink></span>
                                : <NavLink to="/">Fazer Login</NavLink>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}