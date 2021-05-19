import Options from './Options';
import {deleteComment, likeComment} from '../functions/commentsCalls';

const CommentItem = (props) => {
    const {comment} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const likes = comment.likes.map(like => like._id);

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
        <div>
            <p>{comment.text}</p>
            <p>{comment.user.firstName} {comment.user.lastName}</p>
            <p>{comment.likes.length}</p>
            <Options
                element={comment}
                deleteFunction={deleteData}
                likeFunction={submitLike}
                editLink={`/comments/edit/${comment._id}`}
                initialLikeStatus={likeStatus}
            />
        </div>
    )
}

export default CommentItem;