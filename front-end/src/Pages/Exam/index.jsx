import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import { TipoEnum } from '../../shared/enums';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExames, selectAllExames, selectExamesById, updateExameServer } from '../ExamesSlice';
import { useEffect, useState } from 'react';
import { store } from '../../shared/store';

export function Exam() {
  const id = parseInt(useParams().id);
  const history = useHistory();
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});

  const status = useSelector((state) => state.exames.status);
  const exame = useSelector((state) => selectExamesById(state, id));
  
  useEffect(() => {
    if(status !== 'loaded'){
      dispatch(fetchExames());
    }
  });

  const questoes = exame?.questoes ?? [];

  const handleAnswer = (res, num) => {
    const newAnswer = {...answers};
    newAnswer[num] = res;
    setAnswers(newAnswer);
  }

  const enviarProva = (event) => {
    event.preventDefault(); 
    if(confirm('Tem certeza que deseja enviar a prova?')){
      // history.push('/resultado');
      const userId = localStorage.getItem('userId');
      const exameComRespostas = {...exame, 'respostas': []};
      const respostaUser = {};
      respostaUser[userId] = answers;
      exameComRespostas['respostas'].push(respostaUser); 
      dispatch(updateExameServer(exameComRespostas));
    }
  }

  return (
    <>
      <Header nome={exame?.nomeProva}/>
      <form action="" className="exam">
          {questoes.map((questao, index) => {
              const num = index + 1;
              return <Question key={num} dados={questao} onAnswer={handleAnswer}>{num}</Question>
          })}
        <div id="botao">
          <button type="submit" className="botaoEnviar" onClick={enviarProva}>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
