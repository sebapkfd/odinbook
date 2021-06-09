import verifySession from '../functions/verifySession';
import {Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';

const Router = (props) => {
    const {component, path} = props;

    const option = (verifySession()) ? (
        <Route exact path={path}>
            {component}
        </Route>
    ):(
        <Redirect to='/odinbook/login'/>
    )

    return (
        <div>
            <Navbar/>
            {option}
        </div>
    )
}

export default Router;