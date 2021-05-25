import {answerRequest} from '../functions/userCalls';

const RequestOptions = (props) => {
    const {user, managaRequest} = props;
    const receiver = JSON.parse(localStorage.getItem('userSession')).user._id;
    const sender = user._id;

    const submitData = async (value) => {
        await answerRequest(value, {sender, receiver});
        managaRequest(value);
    }

    return (
        <div>
            <button onClick={() => submitData(true)} className={'accept-friend'}>Accept</button>
            <button onClick={() => submitData(false)} className={'reject-friend'}>Reject</button>
        </div>
    )
}

export default RequestOptions;