export const createComment = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/comments', {
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

export const deleteComment = async (id) => {
    try {
        const response = await fetch('http://localhost:5000/comments/' + id, {
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

export const getCommentDetail = async (id) => {
    try {
        const response = await fetch('http://localhost:5000/comments/' + id, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const editComment = async (body) => {
    try {
        const response = await fetch('http://localhost:5000/comments/' + body.id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data; 
    } catch (err) {
        console.log(err);
    }
}