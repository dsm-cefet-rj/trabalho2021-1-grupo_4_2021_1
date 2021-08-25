import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import  StudentArea  from './Pages/Aluno';
import TeacherArea from './Pages/Professor';
import './global.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/aluno"><StudentArea/></Route>
        <Route path="/professor"><TeacherArea/></Route>
        <Route path="/resultado"><ExamResult/></Route>
        <Route path="/prova/criar"><CreateExam/></Route>
        <Route path="/prova"><Exam/></Route>
        <Route path="/"><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;
