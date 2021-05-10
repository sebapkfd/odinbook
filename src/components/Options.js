import verifySession from '../functions/verifySession';
import {Link} from 'react-router-dom';

const Options = (props) => {
    const {element, deleteFunction, editLink} = props;

    const deleteData = async (e) => {
        e.preventDefault();
        deleteFunction();
    }

    const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
    const deleteButton = (element.user._id === userId) ? <button onClick={deleteData}>Delete</button>: null;
    const editButton = (element.user._id === userId) ? <button>Edit</button>: null;

    return (
        <div>
            {deleteButton}
            <Link to={editLink}>
                {editButton}
            </Link>
        </div>
    )
}

export default Options;