import React, { useState } from 'react';
import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import { TipoEnum } from '../../shared/enums';
import './style.css';

export const ExamResult = () => {

    const [questoes, setQuestoes] = useState(
        [
            {
                pergunta: "Quem descobriu o brasil?",
                tipo: TipoEnum.multipla,
                options: ['Pedro Álvares Cabral', 'Nabucodonosor', 'Cristóvão Colombo'],
                resposta: 0
            },
            {
                pergunta: "Como se calcula a hipotenusa de um triângulo retângulo?",
                tipo: TipoEnum.discursiva,
                resposta: "Utilizando a fórmula de Bháskara"
            },
            {
                pergunta: "Quanto é 2 + 2",
                tipo: TipoEnum.objetiva,
                options: [1, 3, 4, 22],
                resposta: 2
            },
        ]
    )

    return (
        <div className="page">
            <Header />
            <div className="prova d-flex">
                {questoes.map((questao, index) => {
                        const num = index + 1;
                        return <Question key={num} dados={questao}>{num}</Question>
                })}
            </div>
        </div>
    )
}