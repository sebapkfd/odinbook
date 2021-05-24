import {Link} from 'react-router-dom';
import Options from './Options';
import {deletePost, likePost} from '../functions/postsCalls';
import { useState } from 'react';

const PostItem = (props) => {
    const {post, useLink, source} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const likes = (source === 'profile') ? post.likes : post.likes.map(like => like._id);
    const [likeCounter, setLikeCounter] = useState(likes.length);
    

    const deleteData = async () => {
        await deletePost(post._id);
        window.location.reload();
    }

    const submitLike = async () => {
        const result = await likePost({user, id: post._id});
        (result.msg ==='Like added') ? setLikeCounter(likeCounter + 1) : setLikeCounter(likeCounter - 1);
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
            <p>{post.user.firstName} {post.user.lastName}</p>
            {title}
            <p>{likeCounter}</p>
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