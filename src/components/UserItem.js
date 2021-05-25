import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import AddFriend from './AddFriend';
import DeleteFriend from './DeleteFriend';
import RequestOptions from './RequestOptions';

const UserItem = (props) => {
    const {user, option} = props;
    const history = useHistory();
    const [friendOption, setFriendOption] = useState(option);
    const buttons = {
        'NotFriends' : <AddFriend user={user}/>,
        'Friends': <DeleteFriend user={user} onDelete={() =>setFriendOption('NotFriends')}/>,
        'Requests': <RequestOptions user={user} managaRequest={(value) =>handleRequest(value)}/>,
    }

    const redirectPage = (path) => {
        history.push(path);
        window.location.reload();
    }

    const handleRequest = (value) => {
        (value) ? setFriendOption('Friends') : setFriendOption('NotFriends');
    }


    const userName = <button onClick={() => redirectPage(`/users/${user._id}`)} className={'user-name-button'}>
                        {user.firstName}
                    </button>;

    return  (
        <div className={'user-item'}>
            {userName}
            {buttons[friendOption]}
        </div>
    )   
}

export default UserItem;