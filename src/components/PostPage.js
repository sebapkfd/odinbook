import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getPostDetail} from '../functions/postsCalls';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import PostItem from './PostItem';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    const getData = async () => {
        const {postDetail, postComments} = await getPostDetail(id);
        setPost(postDetail);
        setComments(postComments);
    };

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(post) {
        return (
            <div className={'post-page'}>
                <p>{post.user.firstName} {post.user.lastName}</p>
                <PostItem post={post} useLink={false} source={'postpage'}/>
                <p>{post.likes.length} Likes</p>
                <CommentInput/>
                <CommentList comments={comments}/>
            </div>
        )
    }
    return null;
}

export default PostPage;