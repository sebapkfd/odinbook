import {useState} from 'react';
import {signUp} from '../functions/userCalls';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        if(password === confirm) {
            const body = {firstName, lastName, email, password};
            await signUp(body);
            window.location.reload();
        }
    }

    return (
        <div className='sign-up'>
        <h1>Log in Odinbook</h1>
            <form onSubmit={submitData}>
                <label>First Name</label>
                <input
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    required={true}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    required={true}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
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
                <label>Confirm Password</label>
                <input
                    name='confirm'
                    type='password'
                    required={true}
                    maxLength={50}
                    placeholder='Confirm password'
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;