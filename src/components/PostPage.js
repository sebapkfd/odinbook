import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getPostDetail} from '../functions/postsCalls';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    const getData = async () => {
        const {postDetail, postComments} = await getPostDetail(id);
        console.log(postDetail);
        setPost(postDetail);
        setComments(postComments);
    };

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(post) {
        return (
            <div>
                <p>{post.user.firstName} {post.user.lastName}</p>
                <h2>{post.text}</h2>
                <p>{post.likes.length} Likes</p>
            </div>
        )
    }
    return null;
}

export default PostPage;