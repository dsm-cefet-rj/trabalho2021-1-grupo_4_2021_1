import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import './global.css';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
          <ul class="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
            <li class="nav-item"><Link class="nav-link" to="/resultado">Home</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/prova/criar">Criar Prova</Link></li>
            <li class="nav-item"><Link class="nav-link" to="/prova">Prova</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/resultado"><ExamResult/></Route>
        <Route path="/prova/criar"><CreateExam/></Route>
        <Route path="/prova"><Exam/></Route>
      </Switch>
    </Router>
  );
}

export default App;
