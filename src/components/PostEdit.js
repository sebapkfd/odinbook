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
        const body = {text, user: post.user, id}
        await editPost(body)
        history.push('/');
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(post) {
        return (
            <div>
                <form>
                    <label>Post</label>
                    <textarea
                        name='text'
                        required={true}
                        maxLength={200}
                        defaultValue={post.text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={submitData}>Save</button>
                </form>
            </div>
        )
    }
    return null; 
}

export default PostEdit;