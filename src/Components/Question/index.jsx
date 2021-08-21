import { useState } from 'react';
import { TipoEnum } from '../../shared/enums';
import {ViewHeadline, RadioButtonChecked, CheckBox} from '@material-ui/icons';
import './styles.css';

export function Question({ dados, isEditing, children, createNewQuestion }) {
  const [enunciadoNovo, setEnunciadoNovo] = useState();


  const handleEnunciadoChange = (event) => {
    setEnunciadoNovo(event.target.value);
  }

  return (
    <div className="card col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
      <h4>{`Questão ${children}`}</h4>
      <textarea rows="3" placeholder="Enunciado" defaultValue={dados.pergunta} disabled={!isEditing} onChange={handleEnunciadoChange}></textarea>
      {selectTypeOfAnswer(dados, isEditing, createNewQuestion, enunciadoNovo)}
    </div>
  );
}

function selectTypeOfAnswer(dados, isEditing, addQuestion, enunciadoNovo) {
  switch (dados.tipo) {
    case TipoEnum.discursiva:
      const temResposta = dados.resposta;
      return (
        <>
          <textarea rows="3" className={`resposta${temResposta ? '-certa' : ''}`} 
            readOnly={isEditing} disabled={isEditing}
            defaultValue={dados.resposta}>
          </textarea>
        </>
      );
      
    case TipoEnum.objetiva: //radio
        if(dados.options) {
          return (
            <div className="radio">
              {
                dados.options.map((valor, indice) => {
                  const res = indice === dados.resposta;
                  return (
                    <label key={indice} className={res ? 'resposta-certa' : ''}>
                      <input type="radio" name="optradio" defaultChecked={res} />
                      {valor}
                    </label>
                  );
                })
              }
            </div>
          );
        }
        return;

    case TipoEnum.multipla: //checkbox
        if(dados.options) {
          return (
            <div className="checkbox">
              {
                dados.options.map((valor, indice) => {
                  const res = indice === dados.resposta;
                  return (
                    <label key={indice} className={res ? 'resposta-certa' : ''}>
                      <input type="checkbox" defaultValue="" defaultChecked={res} /> {valor}
                    </label>
                  )
                })
              }
            </div>
          );
        }
        return;
        
    default:
      return (
        <>
          <div className="tipo">
              <p>Tipo de questão:</p>
              <div className="icones">
                  <ViewHeadline fontSize="large" className="material-icons" onClick={() => addQuestion(TipoEnum.discursiva, enunciadoNovo)} />
                  <RadioButtonChecked fontSize="large" className="material-icons" onClick={() => addQuestion(TipoEnum.objetiva, enunciadoNovo)} />
                  <CheckBox fontSize="large" className="material-icons" onClick={() => addQuestion(TipoEnum.multipla, enunciadoNovo)} />
              </div>
          </div>
        </>
    );
  }
}