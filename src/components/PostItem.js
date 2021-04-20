import {Link} from 'react-router-dom';
import Options from './Options';

const PostItem = (props) => {
    const {post} = props;
    return (
        <div>
            <Link to={`posts/${post._id}`}>
                <p>{post.text}</p>
            </Link>
            <Options post={post}/>
        </div>
    )
}

export default PostItem;