const server = 'https://immense-inlet-51361.herokuapp.com/';

export const getPostList = async () => {
    try {
        const response = await fetch(server + 'posts', {
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

export const getPostDetail = async (id) => {
    try {
        const response = await fetch(server + 'posts/'+ id, {
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

export const createPost = async (body) => {
    try {
        const response = await fetch(server + 'posts', {
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

export const deletePost = async (id) => {
    try {
        const response = await fetch(server + 'posts/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token
            },
            body: JSON.stringify({id})
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const editPost = async (body) => {
    try {
        const response = await fetch(server + 'posts/' + body.id, {
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

export const likePost = async (body) => {
    try {
        const response = await fetch(server + 'posts/' + body.id + '/like', {
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