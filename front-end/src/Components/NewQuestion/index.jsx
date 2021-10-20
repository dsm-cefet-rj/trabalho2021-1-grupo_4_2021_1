import { useState, useEffect } from 'react';
import { TipoEnum } from '../../shared/enums';
import { useHistory } from 'react-router';
import {ViewHeadline, RadioButtonChecked, CheckBox} from '@material-ui/icons';
import './styles.css';

export function NewQuestion({ isEditing, children, createNewQuestion }) {
  const [enunciadoNovo, setEnunciadoNovo] = useState();
  const [tipoQuestao, setTipoQuestao] = useState();
  const [opcao, setOpcao] = useState();
  const [opcoes, setOpcoes] = useState([]);
  const [type, setType] = useState();
  useEffect(() => setType(localStorage.getItem('tipo')), [type])
  let history = useHistory()  

  const handleEnunciadoChange = (event) => {
    setEnunciadoNovo(event.target.value);
  }

  const isQuestionType = (type) => tipoQuestao == type;

  const handleCreateNewQuestion = () => {
    createNewQuestion(tipoQuestao, enunciadoNovo, opcoes);
    setTipoQuestao();
    setOpcoes([]);
    document.getElementById('newQuestion').value = '';
  }

  const addOption = () => {
    setOpcoes([...opcoes, opcao]);
    document.getElementById('txtOpcaoRadio').value = '';
    document.getElementById('txtOpcaoCheck').value = '';
  }


  return (
    <div className="card col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
      <h4>{`Questão ${children}`}</h4>
      <textarea id="newQuestion" rows="3" placeholder="Enunciado" disabled={!isEditing} onChange={handleEnunciadoChange}>{enunciadoNovo}</textarea>

      {/* Discursiva */}
      <textarea rows="3" 
            readOnly={isEditing} disabled={isEditing}
            hidden={!isQuestionType(TipoEnum.discursiva)}>
      </textarea>

      {/* Objetiva */}
      <div className="radio" hidden={!isQuestionType(TipoEnum.objetiva)}>
          {
            opcoes ? opcoes.map((op, index) => {
              return(
                <label htmlFor="optradio" key={index}>
                  <input type="radio" name="optradio" />
                  {op}
                </label>
              )
            }) : null
          }
          <div className="default">
            <input type="radio" name="optradio" />
            <input type="text" id="txtOpcaoRadio" onChange={(e) => setOpcao(e.target.value)}></input>
            <input type="button" value="+" className="btn btn-primary" onClick={addOption}></input>
          </div>
      </div>

      {/* Múltipla escolha */}
      <div className="checkbox" hidden={!isQuestionType(TipoEnum.multipla)}>
          {
            opcoes ? opcoes.map((op, index) => {
              return(
                <label htmlFor="optcheck" key={index}>
                  <input type="checkbox" name="optcheck" />
                  {op}
                </label>
              )
            }) : null
          }
          <div className="default">
            <input type="checkbox" name="optcheck" />
            <input type="text" id="txtOpcaoCheck" onChange={(e) => setOpcao(e.target.value)}></input>
            <input type="button" value="+" className="btn btn-primary" onClick={addOption}></input>
          </div>
      </div>

      <div className="tipo" hidden={!isQuestionType()}>
        <p>Tipo de questão:</p>
        <div className="icones">
            <ViewHeadline fontSize="large" className="material-icons" onClick={() => setTipoQuestao(TipoEnum.discursiva)} />
            <RadioButtonChecked fontSize="large" className="material-icons" onClick={() => setTipoQuestao(TipoEnum.objetiva)} />
            <CheckBox fontSize="large" className="material-icons" onClick={() => setTipoQuestao(TipoEnum.multipla)} />
        </div>
      </div>
      
      <div className="d-flex">
        <button className="btn btn-secondary float-start mt-20" type="button" hidden={isQuestionType()} onClick={() => setTipoQuestao()}>Voltar</button>
        <button className="btn btn-danger float-start mt-20" type="button" hidden={isQuestionType()} onClick={() => setOpcoes([])}>Limpar</button>
        <button className="btn btn-success float-end mt-20" type="button" onClick={handleCreateNewQuestion}>Add</button>
      </div>
    </div>
  );
}
