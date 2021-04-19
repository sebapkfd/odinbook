import {Link} from 'react-router-dom';
import LogOut from './LogOut';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/signup'>
                <button>Sign Up</button>
            </Link>
            <Link to='/login'>
                <button>Log In</button>
            </Link>
            <LogOut/>
        </div>
    )
}

export default Navbar;