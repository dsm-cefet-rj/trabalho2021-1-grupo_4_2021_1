import './styles.css';

export function Question({ dados, children }) {
  return (
    <section className="question">
      <header className="topo2">
        <p>Questão {children}</p>
      </header>
      <div className="card">
        <textarea className="pergunta" disabled>
          {dados.pergunta}
        </textarea>
        {dados.tipo === 'text' && <textarea className="resposta" />}
        {dados.tipo === 'radio' && (
          <div className="radio">
            <label>
              <input type="radio" name="optradio" />
              {dados.options[1]}
            </label>
            <label>
              <input type="radio" name="optradio" />
              {dados.options[2]}
            </label>
            <label>
              <input type="radio" name="optradio" />
              {dados.resposta}
            </label>
          </div>
        )}
        {dados.tipo === 'checkbox' && (
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" /> {dados.options[2]}
            </label>
            <label>
              <input type="checkbox" value="" /> {dados.resposta}
            </label>
            <label>
              <input type="checkbox" value="" /> {dados.options[2]}
            </label>
          </div>
        )}
      </div>
    </section>
  );
}
