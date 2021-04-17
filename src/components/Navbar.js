import {Link} from 'react-router-dom';

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
        </div>
    )
}

export default Navbar;