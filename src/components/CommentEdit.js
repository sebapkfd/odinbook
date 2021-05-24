import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { getCommentDetail, editComment } from '../functions/commentsCalls';

const CommentEdit = () => {
    const {id} = useParams();
    const [comment, setComment] = useState(null);
    const [text, setText] = useState('');
    const history = useHistory();

    const getData = async () => {
        const commentDetail = await getCommentDetail(id);
        setComment(commentDetail);
    }

    const submitData = async (e) => {
        e.preventDefault();
        const body = {id, text, user: comment.user, post: comment.post, likes: comment.likes};
        await editComment(body);
        history.push(`/posts/${comment.post}`);
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(comment) { 
        return (
            <div className={'comment-edit'}>
                <h1>Edit Comment </h1>
                <form>
                    <textarea
                        name={'text'}
                        required={true}
                        maxLength={200}
                        defaultValue={comment.text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={submitData}>Save</button>
                </form>
            </div>
        )
    }
    return null;
}

export default CommentEdit;