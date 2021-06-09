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
        setText(commentDetail.text);
    }

    const submitData = async (e) => {
        e.preventDefault();
        const body = {id, text, user: comment.user, post: comment.post, likes: comment.likes};
        await editComment(body);
        history.push(`/odinbook/posts/${comment.post}`);
    }

    const cancelEdit = (e) => {
        e.preventDefault();
        history.goBack();
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
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <div>
                        <button onClick={cancelEdit} className={'edit-form__buttons'}>Cancel</button>
                        <button onClick={submitData} className={'edit-form__buttons'}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
    return null;
}

export default CommentEdit;