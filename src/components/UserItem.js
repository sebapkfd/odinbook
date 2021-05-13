import {Link} from 'react-router-dom';
import {sendFriendRequest} from '../functions/userCalls';

const UserItem = (props) => {
    const {user} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const receiver = user._id;

    const sendData = async () => {
        await sendFriendRequest({sender, receiver});
    }

    const addFriendButton = (user.friendRequests.includes(sender)) ? null :  <button onClick={sendData}>Add Friend</button> ;

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