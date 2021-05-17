import {sendFriendRequest, cancelFriendRequest} from '../functions/userCalls';

const AddFriend = (props) => {
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

    return (
        <div>{addFriendButton}</div>
    )

}

export default AddFriend;