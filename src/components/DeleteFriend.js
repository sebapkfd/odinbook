import {removeFriend} from '../functions/userCalls';

const DeleteFriend = (props) => {
    const {user} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const friend = user._id;

    const submitData = async () => {
        await removeFriend({sender, friend})
    }
    
    return (
        <div>
            <button onClick={submitData}>Delete Friend</button>
        </div>
    )
}

export default DeleteFriend;