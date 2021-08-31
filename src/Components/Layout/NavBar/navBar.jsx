import React from "react"
import { Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavLink } from "react-router-dom";


export function NavBar(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand>GEPETO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className = "container">
                            <Nav className="navbar justify-content-start">
                                <Nav.Link><NavLink exact to="/">Login</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/prova/criar">Criar Prova</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/prova">Prova</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/resultado">Resultado</NavLink></Nav.Link>
                            </Nav>
                            <Navbar.Text className="justify-content-end">
                                {
                                    props.user?.username 
                                    ? <span>Logado como: <NavLink exact to="/">{props.user.username}</NavLink></span>
                                    : <NavLink to="/">Fazer Login</NavLink>
                                }
                            </Navbar.Text>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}