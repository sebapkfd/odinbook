import {Link, useHistory} from 'react-router-dom';
import AddFriend from './AddFriend';
import DeleteFriend from './DeleteFriend';
import RequestOptions from './RequestOptions';

const UserItem = (props) => {
    const {user, option} = props;
    let friendOptions = null;
    let history = useHistory();

    const redirectPage = (path) => {
        history.push(path);
        window.location.reload();
    }

    if (option === 'NotFriends') {
        friendOptions = <AddFriend user={user}/>;
    }
    else if (option === 'Friends') {
        friendOptions = <DeleteFriend user={user}/>
    }
    else if(option === 'Requests'){
        friendOptions = <RequestOptions user={user}/>
    }

    const userName = <button onClick={() => redirectPage(`/users/${user._id}`)}>{user.firstName}</button>;

    return  (
        <div>
            {userName}
            {friendOptions}
        </div>
    )   
}

export default UserItem;