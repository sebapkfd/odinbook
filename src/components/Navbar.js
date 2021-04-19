import {Link} from 'react-router-dom';
import LogOut from './LogOut';
import verifySession from '../functions/verifySession';

const Navbar = () => {

    const sessionOpts = (verifySession()) ? (
        <div className='session'>
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
            <Link to='/'>
                <button>Home</button>
            </Link>
            {sessionOpts}
        </div>
    )
}

export default Navbar;