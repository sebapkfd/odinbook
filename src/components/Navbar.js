import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/sign-up'>
                <button>Sign Up</button>
            </Link>
            <Link to='/log-in'>
                <button>Log In</button>
            </Link>
        </div>
    )
}

export default Navbar;