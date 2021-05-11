import {Link} from 'react-router-dom';

const UserItem = (props) => {
    const {user} = props;

    return  (
        <div>
            <Link to ={`users/${user._id}`}>
                <p>{user.firstName}</p>
            </Link>
            <button>Add Friend</button>
        </div>
    )   
}

export default UserItem;