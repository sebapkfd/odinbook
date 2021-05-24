import Options from './Options';
import {deleteComment, likeComment} from '../functions/commentsCalls';

const CommentItem = (props) => {
    const {comment} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const {likes} = comment;

    const deleteData = async () => {
        await deleteComment(comment._id);
        window.location.reload();
    }

    const submitLike = async () => {
        const result = await likeComment({user, id: comment._id});
        return result;
    }

    const likeStatus = (likes.includes(user)) ? 'Liked' : 'Like';

    return (
        <div className={'comment-item'}>
            <p className={'comment-item__username'}>{comment.user.firstName} {comment.user.lastName}</p>
            <div className={'comment-item__text'}>
                <p>{comment.text}</p>
            </div>
            <Options
                element={comment}
                deleteFunction={deleteData}
                likeFunction={submitLike}
                editLink={`/comments/edit/${comment._id}`}
                initialLikeStatus={likeStatus}
                likes={likes}
            />
        </div>
    )
}

export default CommentItem;