import { useState } from "react";
import { useParams } from "react-router";
import {createComment} from '../functions/commentsCalls';

const CommentInput = () => {
    const [text, setText] = useState('')
    const {id} = useParams();

    const submitData = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('userSession')).user._id;
        const body = {post: id, text, user};
        await createComment(body);
        window.location.reload();
    }

    return (
        <div className={'comment-input'}>
            <form onSubmit={submitData}>
                <textarea
                    name='text'
                    placeholder='Comment'
                    required={true}
                    value={text}
                    maxLength={200}
                    onChange={e => setText(e.target.value)}
                />
                <button>Post Comment</button>
            </form>
        </div>
    )
}

export default CommentInput;