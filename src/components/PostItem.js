import {Link} from 'react-router-dom'

const PostItem = (props) => {
    const {post} = props;
    return (
        <div>
            <Link to={`posts/${post._id}`}>
                <p>{post.text}</p>
            </Link>
        </div>
    )
}

export default PostItem;