//  Redux
import { Provider } from 'react-redux';
import generateStore from './redux/store';
//  Routing
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
//  Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/main/Home'


function App() {

  const store = generateStore();

  return (
    <>
    <Provider
      store={store}>
      <Router>
        <Switch>

        <Redirect exact from="/" to="/login"/>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/register">
              <Register/>
            </Route>
            
            <Route exact path="/home">
              <Home/>
            </Route>

        </Switch>
      </Router>
    </Provider>
    </>
  );
}

export default App;
