const PostItem = (props) => {
    const {post} = props;
    return (
        <div>
            <p>{post.text}</p>
        </div>
    )
}

export default PostItem;