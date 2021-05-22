import {Link} from 'react-router-dom';
import LogOut from './LogOut';
import verifySession from '../functions/verifySession';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    let history = useHistory();

    const user = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;

    const redirectPage = (path) => {
        history.push(path);
        window.location.reload();
    }

    const sessionOpts = (verifySession()) ? (
        <div className='open-session'>
            <button onClick={() => redirectPage('/')}>Home</button>
            <div className={'open-session__links'}>
                <button onClick={() => redirectPage(`/users/${user}`)}>Profile</button>
                <button onClick={() => redirectPage(`/users`)}>Find friends</button>
                <LogOut/>
            </div>
        </div>
    ):(
        <div className='close-session'>
            <Link to='/signup'>
                <button>Sign Up</button>
            </Link>
            <Link to='/login'>
                <button>Log In</button>
            </Link>
        </div>
    );

    return (
        <div className='navbar'>
            {sessionOpts}
        </div>
    )
}

export default Navbar;