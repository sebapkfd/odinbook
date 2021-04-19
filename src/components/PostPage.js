import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getPostDetail} from '../functions/postsCalls';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();

    const getData = async () => {
        const data = await getPostDetail(id);
        console.log(data);
        setPost(data);
    };

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(post) {
        return (
            <div>{post._id}</div>
        )
    }
    return null;
}

export default PostPage;