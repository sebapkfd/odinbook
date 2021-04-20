import verifySession from '../functions/verifySession';
import {deletePost} from '../functions/postsCalls';

const Options = (props) => {
    const {post} = props;

    const deleteData = async (e) => {
        e.preventDefault();
        await deletePost(post._id);
        window.location.reload();
    }

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button onClick={deleteData}>Delete</button>: null;
    const editButton = (post.user._id === userId) ? <button>Edit</button>: null;

    return (
        <div>
            {deleteButton}
            {editButton}
        </div>
    )
}

export default Options;