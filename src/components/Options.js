import verifySession from '../functions/verifySession';
import {Link} from 'react-router-dom';

const Options = (props) => {
    const {element, deleteFunction, likeFunction, editLink} = props;

    const deleteData = async (e) => {
        e.preventDefault();
        deleteFunction();
    }

    const submitLike = async (e) => {
        e.preventDefault();
        likeFunction();
    }

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (element.user._id === userId) ? <button onClick={deleteData}>Delete</button>: null;
    const editButton = (element.user._id === userId) ? <button>Edit</button>: null;
    const likeButton = <button onClick={submitLike}>Like</button>

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