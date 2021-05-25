import {useHistory} from 'react-router-dom';
import verifySession from '../functions/verifySession';

const LogOut = () => {
    const history = useHistory();

    const clearData = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push('/');
    }

    const LogOutButton = (verifySession()) ? <button onClick={clearData}>Log Out</button> : null;

    return (
        <div id={'log-out-container'}>{LogOutButton}</div>
    )
}

export default LogOut;