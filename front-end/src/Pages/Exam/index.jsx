import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import { TipoEnum } from '../../shared/enums';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExames, selectAllExames, selectExamesById } from '../ExamesSlice';
import { useEffect } from 'react';
import { store } from '../../shared/store';

export function Exam() {
  const id = parseInt(useParams().id);
  const history = useHistory();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.exames.status);
  const exame = useSelector((state) => selectExamesById(state, id));
  
  useEffect(() => {
    if(status !== 'loaded'){
      dispatch(fetchExames());
    }
  });

  const questoes = exame?.questoes ?? [];

  const handleAnswer = (event) => {
    console.log(event);
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
          <button type="submit" className="botaoEnviar" onClick={() => { 
              alert('Prova enviada com sucesso!')
              history.push('/resultado');
            }}>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
