import React from 'react';
import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import { TipoEnum } from '../../shared/enums';
import './style.css';

export const ExamResult = () => {

    return (
        <div>
            <Header />
            <Question 
                dados={{
                    pergunta: "Quem descobriu o brasil?",
                    tipo: TipoEnum.multipla,
                    options: ['Cabral', 'Ruan', 'Colombo'],
                    resposta: 0
                }}>1</Question>
        </div>
    )
}