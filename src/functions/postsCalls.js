export const getPostList = async () => {
    try {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        return data;   
    } catch (err) {
        console.log(err);
    }
}

export const getPostDetail = async (id) => {
    try {
        const response = await fetch('http://localhost:5000/posts/'+ id, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const createPost = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/posts', {
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

export const deletePost = async (id) => {
    try {
        const response = await fetch('http://localhost:5000/posts/' + id, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id})
        })
        const data = await response.json();
        return data; 
        
    } catch (err) {
        console.log(err);
    }
}