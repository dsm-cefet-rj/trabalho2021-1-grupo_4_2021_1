import React from "react"
import { Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


export function NavBar(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>GEPETO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}