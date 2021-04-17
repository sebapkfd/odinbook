export const signUp = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/signup',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;   
    } catch (err) {
        console.log(err);
    }
}

export const logIn = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        const {user, token} = data;
        localStorage.setItem('userSession', JSON.stringify({user, token}))
        return data;   
    } catch (err) {
        console.log(err);
    }
}