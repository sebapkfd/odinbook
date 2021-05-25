import {removeFriend} from '../functions/userCalls';

const DeleteFriend = (props) => {
    const {user, onDelete} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const friend = user._id;

    const submitData = async () => {
        await removeFriend({sender, friend})
        onDelete();
    }

    const deleteButton = (user.friendList.includes(sender)) ? (
        <button onClick={submitData}>Delete Friend</button>
    ): ( null );
    
    return (
        <div className={'delete-friend'}>
            {deleteButton}
        </div>
    )
}

export default DeleteFriend;