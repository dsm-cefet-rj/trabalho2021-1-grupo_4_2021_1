import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExames, selectAllExames } from '../ExamesSlice';
import { NavLink } from 'react-router-dom';

export const Provas = () => {

    const provas = useSelector((state) => selectAllExames(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExames());
    }, [])

    return (
        <div className="container provas">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Nome Prova</th>
                </thead>
                <tbody>
                    {
                        provas.map(prova => {
                            return (
                                <tr key={prova._id}>
                                    <td>{prova._id}</td>
                                    <td>
                                        <NavLink to={`/prova/${prova._id}`}>{prova.nome}</NavLink>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Provas;