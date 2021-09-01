import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import  StudentArea  from './Pages/Aluno';
import TeacherArea from './Pages/Professor';
import { NavBar } from './Components/Layout/NavBar/navBar';
import { store } from './shared/store';
import { Provider } from 'react-redux';


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
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/aluno"><StudentArea/></Route>
          <Route path="/professor"><TeacherArea/></Route>
          <Route path="/resultado"><ExamResult/></Route>
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
