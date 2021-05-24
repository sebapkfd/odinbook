import verifySession from '../functions/verifySession';
import { useState } from 'react';
import {useHistory } from 'react-router';

const Options = (props) => {
    const {element, deleteFunction, likeFunction, editLink, initialLikeStatus, likes} = props;
    const [like, setLike] = useState(initialLikeStatus);
    const [likeCounter, setLikeCounter] = useState(likes.length);
    const history = useHistory();
    
    const deleteData = async (e) => {
        e.preventDefault();
        deleteFunction();
    }

    const submitLike = async (e) => {
        e.preventDefault();
        const {msg} = await likeFunction();
        if (msg === 'Like added') {
            setLike('Liked');
            setLikeCounter(likeCounter + 1);
        }
        else {
            setLike('Like');
            setLikeCounter(likeCounter - 1)
        }
    }

    const editElement = (e) => {
        e.preventDefault();
        history.push(editLink);
    }

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (element.user._id === userId) ? <button onClick={deleteData}>Delete</button>: null;
    const editButton = (element.user._id === userId) ? <button onClick={editElement}>Edit</button>: null;
    const likeButton = <button onClick={submitLike} className={like}>{likeCounter} {like}</button>

    return (
        <div className={'options'}>
            {likeButton}
            {deleteButton}
            {editButton}
        </div>
    )
}

export default Options;