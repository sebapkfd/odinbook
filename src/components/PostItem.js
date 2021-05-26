import {Link} from 'react-router-dom';
import Options from './Options';
import {deletePost, likePost} from '../functions/postsCalls';
import { useState } from 'react';

const PostItem = (props) => {
    const {post, useLink, defaultState} = props;
    const user = JSON.parse(localStorage.getItem('userSession')).user._id;
    const {likes} = post;
    const [render, setRender] = useState(defaultState);

    const deleteData = async () => {
        await deletePost(post._id);
        setRender(false);
    }

    const submitLike = async () => {
        const result = await likePost({user, id: post._id});
        return result;
    }

    const text = (useLink) ? (
        <Link to={`/posts/${post._id}`}>
            <p>{post.text}</p>
        </Link>
    ) : (
        <p>{post.text}</p>
    );

    const likeStatus = (likes.includes(user)) ? 'Liked' : 'Like';

    if(render) {
        return (
            <div className={'post-item'}>
                <p className={'post-item__username'}>{post.user.firstName} {post.user.lastName}</p>
                <div className={'post-item__text'}>
                    {text}
                </div>
                <Options
                    element={post}
                    deleteFunction={deleteData}
                    likeFunction={submitLike}
                    editLink={`/posts/edit/${post._id}`}
                    initialLikeStatus={likeStatus}
                    likes={likes}
                />
            </div>
        )
    }
    return null;
}

export default PostItem;