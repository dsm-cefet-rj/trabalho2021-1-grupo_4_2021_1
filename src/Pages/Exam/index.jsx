import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import './styles.css';

export function Exam() {
  const resposta = {
    pergunta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo ante, eleifend sit amet neque et, sollicitudin tempus nulla. Nulla sit amet tellus dolor. Inpretium euismod ipsum in tincidunt.',
    resposta: 'CERTO',
    options: ['opção 1', 'opção 2', 'opção 3'],
    tipo: 'radio',
  };

  return (
    <>
      <Header />
      <form action="" className="exam">
        <Question dados={{ ...resposta, tipo: 'text' }}>1</Question>
        <Question dados={{ ...resposta, tipo: 'checkbox' }}>2</Question>
        <Question dados={resposta}>3</Question>
        <div id="botao">
          <button type="submit" className="botaoEnviar">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
