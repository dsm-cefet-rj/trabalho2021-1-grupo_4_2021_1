import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavBar } from '../../Components/Layout/NavBar/navBar';
import Sidebar from '../../Components/Layout/SideBar/sideBar'
import Turma from '../../Components/Layout/turmas/turma';

export function TeacherArea(props) {
    return (
        <>
            <Row className="division">
                <Col xs = "3"><Sidebar nome={props.user.username}/></Col>
                <Col><Turma /></Col>
            </Row>

        </>
    );
}

export default TeacherArea;