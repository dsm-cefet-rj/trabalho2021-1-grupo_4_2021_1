import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.css';

export const ExamResult = () => {

    return (
        <div className="page d-flex text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
                <header className="mb-auto"></header>
                <main className="px-3">
                    <h1>Obrigado por enviar sua prova!</h1>
                    <p className="lead">
                        O(A) professor(a) já está corrigindo e em breve você terá seus resultados!
                    </p>

                    <p className="lead">
                        <NavLink className="ver-provas btn btn-lg btn-secondary fw-bold border-white bg-white" to="/provas">Ver Provas</NavLink>
                    </p>
                </main>
                <footer className="mt-auto text-white-50">
                    <p>GEPETO</p>
                </footer>
            </div>
        </div>
    )
}

export default ExamResult;