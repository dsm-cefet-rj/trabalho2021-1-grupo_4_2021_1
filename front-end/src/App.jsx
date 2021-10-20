import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import  {CreateExam}  from './Pages/CreateExam';
import { Login } from './Pages/Login';
import { NavBar } from './Components/Layout/NavBar/navBar';
import { store } from './shared/store';
import { Provider } from 'react-redux';
import { Usuarios} from './Pages/Usuários/index';
import Turma from './Pages/Turma/';
import ListaAluno from './Pages/Usuários/ListaUsuarios/ListaAlunos';
import ListaProfessores from './Pages/Usuários/ListaUsuarios/ListaProfessores';
import ListaTurmas from './Pages/Usuários/ListaUsuarios/ListaTurmas';
import Provas from './Pages/Provas';
import ExamResult from './Pages/ExamResult';


function App() {
  const history = useHistory();
  const [user, setUser] = useState({});

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBar usuario={user}/>
        <Switch>
          <Route path="/cadastro/professores"><ListaProfessores/></Route>
          <Route path="/cadastro/alunos"><ListaAluno/></Route>
          <Route path="/cadastro/turmas"><ListaTurmas/></Route>
          <Route path="/cadastro"><Usuarios user={user}/></Route>
          <Route path="/resultado"><ExamResult /></Route>
          <Route path="/provas"><Provas/></Route>
          <Route path="/prova/criar"><CreateExam /></Route>
          <Route path="/prova/:id"><Exam/></Route>
          <Route exact path="/"><Login changeUserState={setUser} /></Route>
          <Route path="/turma" component={Turma}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
