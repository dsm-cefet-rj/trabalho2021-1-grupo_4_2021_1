import { TipoEnum } from '../../shared/enums';
import './styles.css';

export function Question({ dados, isEditing, children }) {
  
  return (
    <div className="card col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
      <h4>{`Questão ${children}`}</h4>
      <textarea rows="3" placeholder="Enunciado" defaultValue={dados.pergunta} disabled={!isEditing}></textarea>
      {selectTypeOfAnswer(dados, isEditing)}
    </div>
  );
}

function selectTypeOfAnswer(dados, isEditing) {
  switch (dados.tipo) {
    case TipoEnum.discursiva:
      const temResposta = dados.resposta;
      return (
        <>
          <textarea rows="3" className={`resposta${temResposta ? '-certa' : ''}`} disabled={isEditing} value={dados.resposta}></textarea>
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
                    <label className={res ? 'resposta-certa' : ''}>
                      <input key={indice} type="radio" name="optradio" checked={res} />
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
                    <label className={res ? 'resposta-certa' : ''}>
                      <input type="checkbox"  key={indice} value="" checked={res} /> {valor}
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
                  <button className="material-icons">view_headline</button>
                  <button className="material-icons">radio_button_checked</button>
                  <button className="material-icons">check_box</button>
              </div>
          </div>
        </>
    );
  }
}