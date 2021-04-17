import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path={'/signup'}>
            <SignUp/>
          </Route>
          <Route exact path={'/login'}>
            <LogIn/>
          </Route>
          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
