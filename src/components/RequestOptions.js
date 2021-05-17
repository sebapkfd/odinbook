import {answerRequest} from '../functions/userCalls';

const RequestOptions = (props) => {
    const {user} = props;
    const receiver = JSON.parse(localStorage.getItem('userSession')).user._id;
    const sender = user._id;

    const submitData = async (value) => {
        await answerRequest(value, {sender, receiver});
    }

    return (
        <div>
            <button onClick={() => submitData(true)}>Acept</button>
            <button onClick={() => submitData(false)}>Reject</button>
        </div>
    )
}

export default RequestOptions;