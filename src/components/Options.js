import verifySession from '../functions/verifySession';

const Options = (props) => {
    const {post} = props;

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (post.user._id === userId) ? <button>Delete</button>: null;
    const editButton = (post.user._id === userId) ? <button>Edit</button>: null;

    return (
        <div>
            {deleteButton}
            {editButton}
        </div>
    )
}

export default Options;