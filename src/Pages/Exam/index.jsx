import { Header } from '../../Components/Header';
import { Question } from '../../Components/Question';
import { TipoEnum } from '../../shared/enums';
import goToExamResult from './goToExamResult';
import './styles.css';


export function Exam() {
  const resposta = {
    pergunta:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo ante, eleifend sit amet neque et, sollicitudin tempus nulla. Nulla sit amet tellus dolor. Inpretium euismod ipsum in tincidunt.',
    options: ['opção 1', 'opção 2', 'opção 3'],
    tipo: TipoEnum.objetiva,
  };

  return (
    <>
      <Header />
      <form action="" className="exam">
        <Question dados={{ ...resposta, tipo: TipoEnum.discursiva, resposta: ''}}>1</Question>
        <Question dados={{ ...resposta, tipo: TipoEnum.multipla }}>2</Question>
        <Question dados={resposta}>3</Question>
        <div id="botao">
                  <button type="submit" className="botaoEnviar" onClick={ goToExamResult }>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default Exam;
