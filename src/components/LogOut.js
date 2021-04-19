import {useHistory} from 'react-router-dom';
import verifySession from '../functions/verifySession';

const LogOut = () => {
    const history = useHistory();

    const clearData = (e) => {
        e.preventDefault();
        localStorage.clear()
        history.push('/')
        window.location.reload();
    }

    const LogOutButton = (verifySession()) ? <button onClick={clearData}>Log Out</button> : null;

    return (
        <div>{LogOutButton}</div>
    )
}

export default LogOut;