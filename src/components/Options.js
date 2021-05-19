import verifySession from '../functions/verifySession';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Options = (props) => {
    const {element, deleteFunction, likeFunction, editLink, initialLikeStatus} = props;
    const [like, setLike] = useState(initialLikeStatus);
    
    const deleteData = async (e) => {
        e.preventDefault();
        deleteFunction();
    }

    const submitLike = async (e) => {
        e.preventDefault();
        const {msg} = await likeFunction();
        (msg === "Post liked") ? setLike('Liked') : setLike('Like');
    }

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (element.user._id === userId) ? <button onClick={deleteData}>Delete</button>: null;
    const editButton = (element.user._id === userId) ? <button>Edit</button>: null;
    const likeButton = <button onClick={submitLike}>{like}</button>

    return (
        <div>
            {deleteButton}
            <Link to={editLink}>
                {editButton}
            </Link>
            {likeButton}
        </div>
    )
}

export default Options;