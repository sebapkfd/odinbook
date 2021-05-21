import {removeFriend} from '../functions/userCalls';

const DeleteFriend = (props) => {
    const {user} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const friend = user._id;

    const submitData = async () => {
        await removeFriend({sender, friend})
    }

    const deleteButton = (user.friendList.includes(sender)) ? (
        <button onClick={submitData}>Delete Friend</button>
    ): (
        null
    );
    
    return (
        <div>
            {deleteButton}
        </div>
    )
}

export default DeleteFriend;