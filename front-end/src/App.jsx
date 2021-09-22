import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import  {CreateExam}  from './Pages/CreateExam';
import { Login } from './Pages/Login';
import { NavBar } from './Components/Layout/NavBar/navBar';
import { store } from './shared/store';
import { Provider } from 'react-redux';
import { Usuarios} from './Pages/Usuários/index';
import ProfessorTable from './Pages/Professor/professor';
import AlunosTable from './Pages/Aluno/alunos';
import TurmasTable from './Pages/Turma/turmas';
import Turma from './Pages/Turma/';


function App() {
  const history = useHistory();
  const [user, setUser] = useState({});

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/cadastro/professores"><ProfessorTable/></Route>
          <Route path="/cadastro/alunos"><AlunosTable/></Route>
          <Route path="/cadastro/turmas"><TurmasTable/></Route>
          <Route path="/cadastro"><Usuarios user={user}/></Route>
          <Route path="/prova/criar">
            <CreateExam />
          </Route>
          <Route path="/prova/:id"><Exam/></Route>
          <Route exact path="/"><Login /></Route>
          <Route path="/turma" component={Turma}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
