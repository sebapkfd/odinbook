import {useState} from 'react';
import {logIn} from '../functions/userCalls';
import {useHistory, Link} from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitData = async (e) => {
        e.preventDefault();
        const body = {username: email, password};
        await logIn(body);
        history.push('/');
    }

    return (
        <div className='log-in'>
            <h1>Log in Odinbook</h1>
            <form onSubmit={submitData}>
                <label>Email</label>
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    required={true}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    name='password'
                    type='password'
                    required={true}
                    maxLength={50}
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
            <div className={'sign-up__link'}>
                <p>New to Odinbook? <Link to='/signup'>Create an account.</Link></p>
            </div>
        </div>
    )
}

export default LogIn;