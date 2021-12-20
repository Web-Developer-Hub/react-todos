import { createContext, useEffect, useState } from 'react';
import './App.css';
import AllTodos from './Components/AllTodos/AllTodos';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import DetailsTodos from './Components/DetailsTodods/DetailsTodos';
import ActivTodos from './Components/ActiveTodos/ActiveTodos';
import DeactiveTodos from './Components/DeactiveTodos/DeactiveTodos';
import Chart from './Components/Chart/Chart';
import Footer from './Components/Footer/Footer';

export const TodosContext = createContext('Hello Dude');

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const API = `https://jsonplaceholder.typicode.com/todos`
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])


  return (
    <TodosContext.Provider value={todos}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <AllTodos></AllTodos>
              </Route>

              <Route exact path='/todos'>
                <AllTodos></AllTodos>
              </Route>

              <Route exact path='/active/todos'>
                <ActivTodos></ActivTodos>
              </Route>

              <Route exact path='/deactive/todos'>
                <DeactiveTodos></DeactiveTodos>
              </Route>

              <Route exact path='/details/todos/:todosId'>
                <DetailsTodos></DetailsTodos>
              </Route>

              <Route exact path='/todos/chart'>
                <Chart></Chart>
              </Route>

              <Route exact path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
        </header>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
