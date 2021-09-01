import React from "react"
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavLink } from "react-router-dom";


export function NavBar(props) {
    let user = localStorage.getItem('user');

    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand>GEPETO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className = "container">
                            <Nav className="navbar justify-content-start">
                                <Nav.Link><NavLink exact to="/" style={{textDecoration:'none'}}>Login</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/prova/criar" style={{textDecoration:'none'}}>Criar Prova</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/aluno" style={{textDecoration:'none'}}>Prova</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/resultado" style={{textDecoration:'none'}}>Resultado</NavLink></Nav.Link>
                                <Navbar.Text  className="justify-content-end">
                                    {
                                        user
                                        ? <span>Logado como: {user} <NavLink exact to="/" onClick={() => {
                                            localStorage.removeItem('user');
                                            user = '';
                                        }}>Sair</NavLink></span>
                                        : <NavLink to="/">Fazer Login</NavLink>
                                    }
                                </Navbar.Text>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}