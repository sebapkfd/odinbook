import {Link} from 'react-router-dom';
import {sendFriendRequest, cancelFriendRequest} from '../functions/userCalls';

const UserItem = (props) => {
    const {user} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const receiver = user._id;

    const sendRequest = async () => {
        await sendFriendRequest({sender, receiver});
    }

    const cancelRequest = async () => {
        await cancelFriendRequest({sender, receiver});
    }

    const addFriendButton = (user.friendRequests.includes(sender)) ? (
        <button onClick={cancelRequest}>Cancel Request</button>
        ) : (
        <button onClick={sendRequest}>Add Friend</button>
        );

    return  (
        <div>
            <Link to ={`users/${user._id}`}>
                <p>{user.firstName}</p>
            </Link>
            {addFriendButton}
        </div>
    )   
}

export default UserItem;