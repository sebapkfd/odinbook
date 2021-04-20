import Options from './Options';
import {deleteComment} from '../functions/commentsCalls';

const CommentItem = (props) => {
    const {comment} = props;

    const deleteData = async () => {
        await deleteComment(comment._id);
        window.location.reload();
    }

    return (
        <div>
            <p>{comment.text}</p>
            <p>{comment.user.firstName} {comment.user.lastName}</p>
            <p>{comment.likes.length}</p>
            <Options element={comment} deleteFunction={deleteData}/>
        </div>
    )
}

export default CommentItem;