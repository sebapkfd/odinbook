import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getPostDetail, editPost } from '../functions/postsCalls';

const PostEdit = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [text, setText] = useState('');
    const history = useHistory();

    const getData = async () => {
        const {postDetail} = await getPostDetail(id);
        setPost(postDetail);
    };

    const submitData = async (e) => {
        e.preventDefault();
        const body = {id, text, user: post.user, likes: post.likes};
        await editPost(body);
        history.push(`/posts/${post._id}`);
    }

    const cancelEdit = (e) => {
        e.preventDefault();
        history.goBack();
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(post) {
        return (
            <div className={'post-edit'}>
                <h1>Edit Post</h1>
                <form>
                    <textarea
                        name='text'
                        required={true}
                        maxLength={200}
                        defaultValue={post.text}
                        onChange={e => setText(e.target.value)}
                    />
                    <div>
                        <button onClick={cancelEdit} className={'edit-form__buttons'}>Cancel</button>
                        <button onClick={submitData} className={'edit-form__buttons'}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
    return null; 
}

export default PostEdit;