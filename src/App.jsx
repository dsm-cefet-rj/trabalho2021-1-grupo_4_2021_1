import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import  StudentArea  from './Pages/Aluno';
import TeacherArea from './Pages/Professor';


function App() {
  const [user, setUser] = useState({});

  function questoesReducer(questoes, action) {
    switch(action.type) {
      case 'add_question':
        return [...questoes, action.payload];
    }
  }

  const [questoes, dispatch] = useReducer(questoesReducer, []);

  return (
    <Router>
      <Switch>
        <Route path="/aluno"><StudentArea user={user}/></Route>
        <Route path="/professor"><TeacherArea user={user}/></Route>
        <Route path="/resultado"><ExamResult user={user}/></Route>
        <Route path="/prova/criar">
          <CreateExam 
            user={user} questoes={questoes}
            dispatch={dispatch}/>
        </Route>
        <Route path="/prova"><Exam user={user}/></Route>
        <Route path="/"><Login user={user} setUser={setUser}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
