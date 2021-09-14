import { TipoEnum } from '../../shared/enums';
import { useEffect, useState } from 'react';
import './styles.css';

export function Question({ dados, isEditing, onAnswer, children }) {

  const [answer, setAnswer] = useState([]);

  const handleAnswerQuestion = (event) => {
    if(dados.tipo === TipoEnum.multipla) {
      if(event.target.checked)
        setAnswer([...answer, event.target.name])
      else {
        const newAnswer = [...answer].filter(a => a !== event.target.name);
        setAnswer(newAnswer);
      }
    }
    else if(dados.tipo === TipoEnum.objetiva) {
      if(event.target.checked)
        setAnswer([event.target.id]);
    }
    else {
      setAnswer([event.target.value]);
    }
  }

  useEffect(() => {
    if(!isEditing){
      onAnswer(answer, children);
    }
  }, [answer])
  
  function selectTypeOfAnswer(dados, isEditing) {
    switch (dados.tipo) {
      case TipoEnum.discursiva:
        const temResposta = dados.resposta;
        return (
          <>
            <textarea rows="3" className={`resposta${temResposta ? '-certa' : ''}`} 
              readOnly={isEditing} disabled={isEditing}
              onChange={handleAnswerQuestion}
              defaultValue={dados.resposta}>
            </textarea>
          </>
        );
        
      case TipoEnum.objetiva: //radio
        if(dados.options){
            return (
              <div className="radio">
                {
                  dados.options.map((valor, indice) => {
                    const res = indice === dados.resposta;
                    return (
                      <label key={indice} className={res ? 'resposta-certa' : ''}>
                        <input type="radio" name='optradio' id={indice} defaultChecked={res} onChange={handleAnswerQuestion} />
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
        if(dados.options){
            return (
              <div className="checkbox">
                {
                  dados.options.map((valor, indice) => {
                    const res = indice === dados.resposta;
                    return (
                      <label key={indice} className={res ? 'resposta-certa' : ''}>
                        <input type="checkbox" name={indice} defaultValue="" defaultChecked={res} onChange={handleAnswerQuestion} /> {valor}
                      </label>
                    )
                  })
                }
              </div>
            );
        }
        return;
      default:
        return;
    }
  }

  return (
    <div className="card col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
      <h4>{`Questão ${children}`}</h4>
      <p>{dados.pergunta}</p>
      {selectTypeOfAnswer(dados, isEditing)}
    </div>
  );
}

