import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Router from './components/Router';
import PostPage from './components/PostPage';
import PostEdit from './components/PostEdit';
import CommentEdit from  './components/CommentEdit';
import Profile from './components/Profile';
import UsersPage from './components/UsersPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/odinbook/signup'}>
            <SignUp/>
          </Route>
          <Route exact path={'/odinbook/login'}>
            <LogIn/>
          </Route>
          <Router component={<CommentEdit/>} path={'/odinbook/comments/edit/:id'}/>
          <Router component={<PostEdit/>} path={'/odinbook/posts/edit/:id'}/>
          <Router component={<PostPage/>} path={'/odinbook/posts/:id'}/>
          <Router component={<Profile/>} path={'/odinbook/users/:id'}/>
          <Router component={<UsersPage/>} path={'/odinbook/users'}/>
          <Router component={<Home/>} path={'/odinbook'}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
