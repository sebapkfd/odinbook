import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Router from './components/Router';
import PostPage from './components/PostPage';
import PostEdit from './components/PostEdit';

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
          <Router component={<PostEdit/>} path={'/posts/edit/:id'}/>
          <Router component={<PostPage/>} path={'/posts/:id'}/>
          <Router component={<Home/>} path={'/'}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
