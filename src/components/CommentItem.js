import Options from './Options';
import {deleteComment, likeComment} from '../functions/commentsCalls';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const CommentItem = (props) => {
    const {comment, defaultState} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const {likes} = comment;
    const [render, setRender] = useState(defaultState);

    const deleteData = async () => {
        await deleteComment(comment._id);
        setRender(false);
    }

    const submitLike = async () => {
        const result = await likeComment({user, id: comment._id});
        return result;
    }

    const likeStatus = (likes.includes(user)) ? 'Liked' : 'Like';

    if(render) {
        return (
            <div className={'comment-item'}>
                <Link to={`/odinbook/users/${comment.user._id}`}>
                    <p className={'comment-item__username'}>{comment.user.firstName} {comment.user.lastName}</p>
                </Link>
                <div className={'comment-item__text'}>
                    <p>{comment.text}</p>
                </div>
                <Options
                    element={comment}
                    deleteFunction={deleteData}
                    likeFunction={submitLike}
                    editLink={`/odinbook/comments/edit/${comment._id}`}
                    initialLikeStatus={likeStatus}
                    likes={likes}
                />
            </div>
        )
    }
    return null;
}

export default CommentItem;