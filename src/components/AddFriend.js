import { useState } from 'react';
import {sendFriendRequest, cancelFriendRequest} from '../functions/userCalls';

const AddFriend = (props) => {
    const {user} = props;
    const sender = JSON.parse(localStorage.getItem('userSession')).user._id;
    const receiver = user._id;
    const [request, setRequest] = useState('Add Friend');
    const content = {
        'Add Friend': <button onClick={() => sendRequest()}>Add Friend</button>,
        'Cancel Request': <button onClick={()=> cancelRequest()}>Cancel Request</button>
    };

    const sendRequest = async () => {
        await sendFriendRequest({sender, receiver});
        setRequest('Cancel Request');
    }

    const cancelRequest = async () => {
        await cancelFriendRequest({sender, receiver});
        setRequest('Add Friend');
    }

    return (
        <div className={'add-friend'}>
            {content[request]}
        </div>
    )

}

export default AddFriend;