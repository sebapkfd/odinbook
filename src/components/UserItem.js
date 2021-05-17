import {Link} from 'react-router-dom';
import AddFriend from './AddFriend';
import DeleteFriend from './DeleteFriend';
import RequestOptions from './RequestOptions';

const UserItem = (props) => {
    const {user, option} = props;
    let friendOptions = null;

    if (option === 'NotFriends') {
        friendOptions = <AddFriend user={user}/>;
    }
    else if (option === 'Friends') {
        friendOptions = <DeleteFriend user={user}/>
    }
    else if(option === 'Requests'){
        friendOptions = <RequestOptions user={user}/>
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