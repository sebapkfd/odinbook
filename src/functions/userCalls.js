const server = 'https://immense-inlet-51361.herokuapp.com/';

export const signUp = async (body) => {
    try {
        const response = await fetch(server + 'signup',{
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
        const response = await fetch(server + 'login', {
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

export const getUserDetail = async (id) => {
    try {
        const response = await fetch(server + 'users/'+ id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            }
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getUserList = async () => {
    try {
        const response = await fetch(server + 'users/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            }
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getOtherUsersList = async (id) => {
    try {
        const response = await fetch(server + 'users/others/' + id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            }
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const sendFriendRequest = async (body) => {
    try {
        const response = await fetch(server + 'users/others', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const cancelFriendRequest = async (body) => {
    try {
        const response = await fetch(server + 'users/others', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const answerRequest = async (value, body) => {
    try {
        if (value) {
            const response = await fetch(server + 'users/requests', {
                method: 'PUT',
                headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
                },
                body: JSON.stringify(body)
            })
            const data = await response.json();
            return data;
        }
        else {
            const response = await fetch(server + 'users/others', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
        }
    } catch (err) {
        console.log(err);
    }
}

export const removeFriend = async (body) => {
    try {
        const response = await fetch(server + 'users/friends', {
            method: 'PUT',
            headers: {
            "Content-Type": "application/json", 
            "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}