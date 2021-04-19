import verifySession from '../functions/verifySession';
import {Route, Redirect} from 'react-router-dom';

const Router = (props) => {
    const {component, path} = props;

    const option = (verifySession()) ? (
        <Route exact path={path}>
            {component}
        </Route>
    ):(
        <Redirect to='login'/>
    )
    

    return (
        <div>{option}</div>
    )
}

export default Router;