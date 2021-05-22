import {useState} from 'react';
import {createPost} from '../functions/postsCalls';

const PostInput = () => {
    const [post, setPost] = useState('')

    const submitData = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('userSession')).user._id;
        const body = {user, text: post}
        await createPost(body);
        window.location.reload();
    }

    return (
        <div className={'post-input'}>
            <form onSubmit={submitData}>
                <textarea
                    name='text'
                    placeholder= 'Text'
                    value={post}
                    required={true}
                    maxLength={200}
                    onChange={e => setPost(e.target.value)}
                />
                <button>Post</button>
            </form>
        </div>
    )
}

export default PostInput;