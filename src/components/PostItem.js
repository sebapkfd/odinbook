import {Link} from 'react-router-dom';
import Options from './Options';
import {deletePost, likePost} from '../functions/postsCalls';

const PostItem = (props) => {
    const {post, useLink, source} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const likes = (source === 'profile') ? post.likes : post.likes.map(like => like._id);

    const deleteData = async () => {
        await deletePost(post._id);
        window.location.reload();
    }

    const submitLike = async () => {
        const result = await likePost({user, id: post._id});
        return result;
    }

    const title = (useLink) ? (
        <Link to={`/posts/${post._id}`}>
            <p>{post.text}</p>
        </Link>
    ) : (
        <p>{post.text}</p>
    );

    const likeStatus = (likes.includes(user)) ? 'Liked' : 'Like';

    return (
        <div className={'post-item'}>
            {title}
            <Options
                element={post}
                deleteFunction={deleteData}
                likeFunction={submitLike}
                editLink={`/posts/edit/${post._id}`}
                initialLikeStatus={likeStatus}
                />
        </div>
    )
}

export default PostItem;