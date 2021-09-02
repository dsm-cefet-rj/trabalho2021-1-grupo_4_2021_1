import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import { NavBar } from './Components/Layout/NavBar/navBar';
import { store } from './shared/store';
import { Provider } from 'react-redux';
import Alunos from './Components/Layout/CadastroAluno';


function App() {
  const history = useHistory();
  const [user, setUser] = useState({});

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/resultado"><ExamResult/></Route>
          <Route path="/cadastro"><Alunos user={user}/></Route>
          <Route path="/prova/criar">
            <CreateExam />
          </Route>
          <Route path="/prova/:id"><Exam/></Route>
          <Route path="/"><Login /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
