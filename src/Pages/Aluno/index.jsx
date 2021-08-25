import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavBar } from '../../Components/Layout/NavBar/navBar';
import Sidebar from '../../Components/Layout/SideBar/sideBar'
import Materia from '../../Components/Layout/Test/materia';

import './login.css';


export function StudentArea() {
    return (
        <>
            <NavBar />
            <Row className="division">
                <Col xs = "3"><Sidebar /></Col>
                <Col><Materia /></Col>
            </Row>

        </>
    );
}

export default StudentArea;