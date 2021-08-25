import { TipoEnum } from '../../shared/enums';
import './styles.css';

export function Question({ dados, isEditing, children }) {

  return (
    <div className="card col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
      <h4>{`Questão ${children}`}</h4>
      <textarea rows="3" placeholder="Enunciado" defaultValue={dados.pergunta} disabled={!isEditing}></textarea>
      {selectTypeOfAnswer(dados)}
    </div>
  );
}

function selectTypeOfAnswer(dados, isEditing) {
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
        if(dados.options){
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
        if(dados.options){
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
        return;
    }
  }