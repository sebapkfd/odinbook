import {useState} from 'react';
import {logIn} from '../functions/userCalls';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        const body = {username: email, password};
        await logIn(body);
        window.location.reload();
    }

    return (
        <div className='sign-up'>
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
        </div>
    )
}

export default SignUp;