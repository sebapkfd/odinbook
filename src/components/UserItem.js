import {Link} from 'react-router-dom';
import {sendFriendRequest} from '../functions/userCalls';

const UserItem = (props) => {
    const {user} = props;

    const sendData = async () => {
        const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
        const receiver = user._id;
        await sendFriendRequest({sender, receiver});
    }

    return  (
        <div>
            <Link to ={`users/${user._id}`}>
                <p>{user.firstName}</p>
            </Link>
            <button onClick={sendData}>Add Friend</button>
        </div>
    )   
}

export default UserItem;