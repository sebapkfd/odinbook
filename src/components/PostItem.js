import {Link} from 'react-router-dom';
import Options from './Options';
import {deletePost, likePost} from '../functions/postsCalls';

const PostItem = (props) => {
    const {post, useLink} = props;

    const deleteData = async () => {
        await deletePost(post._id);
        window.location.reload();
    }

    const submitLike = async () => {
        const user = JSON.parse(localStorage.getItem('userSession')).user._id;
        const result = await likePost({user, id: post._id});
        console.log(result);
        // window.location.reload();
    }

    const title = (useLink) ? (
        <Link to={`posts/${post._id}`}>
            <p>{post.text}</p>
        </Link>
    ) : (
        <p>{post.text}</p>
    );

    return (
        <div>
            {title}
            <Options
                element={post}
                deleteFunction={deleteData}
                likeFunction = {submitLike}
                editLink={`posts/edit/${post._id}`}/>
        </div>
    )
}

export default PostItem;