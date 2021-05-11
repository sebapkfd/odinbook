import {Link} from 'react-router-dom';
import LogOut from './LogOut';
import verifySession from '../functions/verifySession';

const Navbar = () => {

    
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const sessionOpts = (verifySession()) ? (
        <div className='session'>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to={`/users/${user}`}>
                <button>Profile</button>
            </Link>
            <LogOut/>
        </div>
    ):(
        <div className='session'>
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