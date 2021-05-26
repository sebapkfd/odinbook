import LogOut from './LogOut';
import verifySession from '../functions/verifySession';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    let history = useHistory();
    const user = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;

    const redirectPage = (path) => {
        history.push(path);
    }

    if (verifySession()) {
        return (
            <div className='navbar'>
                <div className='open-session'>
                    <button onClick={() => redirectPage('/')}>Home</button>
                    <div className={'open-session__links'}>
                        <button onClick={() => redirectPage(`/users/${user}`)}>Profile</button>
                        <button onClick={() => redirectPage(`/users`)}>Find friends</button>
                        <LogOut/>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default Navbar;