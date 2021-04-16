import {useState} from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        // if(password === confirm) {
        //     const body = {firstName, lastName, email, password};
        //     await signUp(body);
        //     window.location.reload();
        // }
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
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;