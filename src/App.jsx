import React, { useReducer, useState, Provider } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Exam } from './Pages/Exam';
import { CreateExam } from './Pages/CreateExam';
import { ExamResult } from './Pages/ExamResult';
import { Login } from './Pages/Login';
import { NavBar } from './Components/Layout/NavBar/navBar';
import { store } from './shared/store';


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
          <Route path="/resultado"><ExamResult/></Route>
          <Route path="/prova/criar">
            <CreateExam />
          </Route>
          <Route path="/prova"><Exam/></Route>
          <Route path="/"><Login /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
