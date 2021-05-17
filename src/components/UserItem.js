import {Link} from 'react-router-dom';
import AddFriend from './AddFriend';

const UserItem = (props) => {
    const {user, option} = props;
    let friendOptions = null;

    if (option === 'NotFriends') {
        friendOptions = <AddFriend user={user}/>;
    }
    else if (option === 'Friends') {
        friendOptions = <button>Delete Friend</button>
    }
    else {
        console.log('Requests');
    }

    return  (
        <div>
            <Link to ={`users/${user._id}`}>
                <p>{user.firstName}</p>
            </Link>
            {friendOptions}
        </div>
    )   
}

export default UserItem;