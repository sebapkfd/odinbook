const CommentItem = (props) => {
    const {comment} = props;

    return (
        <div>
            <p>{comment.text}</p>
            <p>{comment.user.firstName} {comment.user.lastName}</p>
            <p>{comment.likes.length}</p>
        </div>
    )
}

export default CommentItem;