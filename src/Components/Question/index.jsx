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
      return (
        <>
          <textarea rows="3" className="resposta" disabled={isEditing}></textarea>
        </>
      );
      
    case TipoEnum.objetiva: //radio
        if(dados.options) {
          return (
            <div className="radio">
              <label>
                <input type="radio" name="optradio" />
                {dados.options[0]}
              </label>
              <label>
                <input type="radio" name="optradio" />
                {dados.options[1]}
              </label>
              <label>
                <input type="radio" name="optradio" />
                {dados.resposta}
              </label>
            </div>
          );
        }
        return;

    case TipoEnum.multipla: //checkbox
        if(dados.options) {
          return (
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" /> {dados.options[0]}
              </label>
              <label>
                <input type="checkbox" value="" /> {dados.resposta}
              </label>
              <label>
                <input type="checkbox" value="" /> {dados.options[2]}
              </label>
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