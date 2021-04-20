import {Link} from 'react-router-dom';
import Options from './Options';
import {deletePost} from '../functions/postsCalls';

const PostItem = (props) => {
    const {post} = props;

    const deleteData = async () => {
        await deletePost(post._id);
        window.location.reload();
    }

    return (
        <div>
            <Link to={`posts/${post._id}`}>
                <p>{post.text}</p>
            </Link>
            <Options element={post} deleteFunction={deleteData}/>
        </div>
    )
}

export default PostItem;