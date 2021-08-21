import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import './global.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/prova/criar">Criar Prova</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/prova">Prova</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/resultado">Resultado</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/resultado"><ExamResult/></Route>
        <Route path="/prova/criar"><CreateExam/></Route>
        <Route path="/prova"><Exam/></Route>
        <Route path="/"><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;
