import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import { NavBar } from './Components/Layout/NavBar/navBar';
import Alunos from './Components/Layout/CadastroAluno';


function App() {
  const history = useHistory();
  const [user, setUser] = useState({});

  function questoesReducer(questoes, action) {
    switch(action.type) {
      case 'add_question':
        return [...questoes, action.payload];
    }
  }

  const [questoes, dispatch] = useReducer(questoesReducer, []);

  return (
    <Router history={history}>
      <NavBar user={user} />
      <Switch>
        <Route path="/resultado"><ExamResult user={user}/></Route>
        <Route path="/cadastro"><Alunos user={user}/></Route>
        <Route path="/professor" >
          <CreateExam 
            user={user} questoes={questoes}
            dispatch={dispatch}/>
        </Route>
        <Route path="/aluno"><Exam user={user}/></Route>
        <Route path="/"><Login user={user} setUser={setUser}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
