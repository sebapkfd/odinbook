import CommentItem from './CommentItem';

const CommentList = (props) => {
    const {comments} = props;

    return (
        <div className={'comment-list'}>
            {comments.map(comment => {
                return <CommentItem key={comment._id} comment={comment} defaultState={true}/>
            })}
        </div>
    )
}

export default CommentList;